/* ============================================================
   windowManager.js
   Handles: create, close, minimize, maximize, drag, resize,
            z-index stack, focus management, taskbar sync.
   ============================================================ */

const WindowManager = (() => {
  let zCounter = 200;
  const windows = new Map(); // id → { el, state, config }

  /* ── Helpers ── */
  const container = () => document.getElementById('windows-container');

  function nextZ() { return ++zCounter; }

  function focusWindow(id) {
    windows.forEach((w, wid) => {
      w.el.classList.toggle('focused', wid === id);
      const tbBtn = document.getElementById(`tb-btn-${wid}`);
      if (tbBtn) tbBtn.classList.toggle('active', wid === id);
    });
    if (windows.has(id)) windows.get(id).el.style.zIndex = nextZ();
  }

  /* ── Create Window ── */
  function open(config) {
    // Prevent duplicate single-instance windows
    if (config.singleton && windows.has(config.id)) {
      const w = windows.get(config.id);
      if (w.state === 'minimized') restore(config.id);
      else focusWindow(config.id);
      return;
    }

    const id = config.id;
    const el  = document.createElement('div');
    el.className = 'os-window opening';
    el.id = `win-${id}`;
    el.style.cssText = `
      width:  ${config.width  || 620}px;
      height: ${config.height || 440}px;
      top:    ${config.top    || randomPos(80, 200)}px;
      left:   ${config.left   || randomPos(80, 300)}px;
      z-index: ${nextZ()};
    `;

    el.innerHTML = `
      <div class="win-titlebar" data-win-id="${id}">
        <span class="win-title-icon">${iconHTML(config, 16)}</span>
        <span class="win-title-text">${config.title}</span>
        <div class="win-controls">
          <button class="win-btn win-btn-min"   title="Minimize" data-action="minimize" data-win-id="${id}">─</button>
          <button class="win-btn win-btn-max"   title="Maximize" data-action="maximize" data-win-id="${id}">□</button>
          <button class="win-btn win-btn-close" title="Close"    data-action="close"    data-win-id="${id}">✕</button>
        </div>
      </div>
      <div class="win-body">
        <div class="app-content">${config.content || ''}</div>
      </div>
      <div class="win-resize" data-win-id="${id}"></div>
    `;

    container().appendChild(el);
    el.addEventListener('animationend', () => el.classList.remove('opening'), { once: true });

    // Drag
    el.querySelector('.win-titlebar').addEventListener('mousedown', onTitlebarMousedown);
    // Resize
    el.querySelector('.win-resize').addEventListener('mousedown', onResizeMousedown);
    // Control buttons
    el.addEventListener('mousedown', onControlClick);
    // Focus on click
    el.addEventListener('mousedown', () => focusWindow(id), true);

    windows.set(id, { el, state: 'open', config, savedRect: null });
    focusWindow(id);
    Taskbar.addButton(id, config);

    if (typeof config.onOpen === 'function') config.onOpen(el, config._args || null);
    return el;
  }

  function randomPos(min, range) {
    return min + Math.floor(Math.random() * range);
  }

  /* ── Control Button Click ── */
  function onControlClick(e) {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    e.stopPropagation();
    const id = btn.dataset.winId;
    const action = btn.dataset.action;
    if (action === 'minimize') minimize(id);
    else if (action === 'maximize') toggleMaximize(id);
    else if (action === 'close') close(id);
  }

  /* ── Close ── */
  function close(id) {
    if (!windows.has(id)) return;
    const { el } = windows.get(id);
    el.classList.add('minimizing');
    el.addEventListener('animationend', () => {
      el.remove();
      windows.delete(id);
      Taskbar.removeButton(id);
    }, { once: true });
  }

  /* ── Minimize ── */
  function minimize(id) {
    if (!windows.has(id)) return;
    const w = windows.get(id);
    w.el.classList.add('minimizing');
    w.el.addEventListener('animationend', () => {
      w.el.style.visibility = 'hidden';
      w.el.classList.remove('minimizing');
      w.state = 'minimized';
      Taskbar.setMinimized(id, true);
    }, { once: true });
  }

  /* ── Restore ── */
  function restore(id) {
    if (!windows.has(id)) return;
    const w = windows.get(id);
    w.el.style.visibility = 'visible';
    w.el.classList.add('restoring');
    w.el.addEventListener('animationend', () => {
      w.el.classList.remove('restoring');
      w.state = 'open';
      Taskbar.setMinimized(id, false);
      focusWindow(id);
    }, { once: true });
  }

  /* ── Maximize / Restore ── */
  function toggleMaximize(id) {
    if (!windows.has(id)) return;
    const w = windows.get(id);
    if (w.el.classList.contains('maximized')) {
      // Restore saved rect
      const r = w.savedRect;
      if (r) {
        w.el.style.width  = r.width;
        w.el.style.height = r.height;
        w.el.style.top    = r.top;
        w.el.style.left   = r.left;
      }
      w.el.classList.remove('maximized');
    } else {
      w.savedRect = {
        width:  w.el.style.width,
        height: w.el.style.height,
        top:    w.el.style.top,
        left:   w.el.style.left,
      };
      w.el.classList.add('maximized');
    }
  }

  /* ── Toggle (taskbar click) ── */
  function toggle(id) {
    if (!windows.has(id)) return;
    const w = windows.get(id);
    if (w.state === 'minimized') restore(id);
    else if (w.el.classList.contains('focused')) minimize(id);
    else focusWindow(id);
  }

  /* ── Drag ── */
  let dragging = null;
  function onTitlebarMousedown(e) {
    if (e.target.closest('[data-action]')) return;
    const id = e.currentTarget.dataset.winId;
    const w  = windows.get(id);
    if (!w || w.el.classList.contains('maximized')) return;

    focusWindow(id);
    const rect  = w.el.getBoundingClientRect();
    const offX  = e.clientX - rect.left;
    const offY  = e.clientY - rect.top;

    // Overlay to prevent mouse-leave issues
    const overlay = document.createElement('div');
    overlay.className = 'win-drag-overlay';
    overlay.style.cursor = 'move';
    document.body.appendChild(overlay);
    dragging = { id, offX, offY, overlay };

    e.preventDefault();
  }

  /* ── Unified mousemove for drag + resize ── */
  document.addEventListener('mousemove', e => {
    if (dragging) {
      const w = windows.get(dragging.id);
      if (w) {
        const maxH = window.innerHeight - 44;
        let nx = e.clientX - dragging.offX;
        let ny = e.clientY - dragging.offY;
        nx = Math.max(0, Math.min(nx, window.innerWidth  - w.el.offsetWidth));
        ny = Math.max(0, Math.min(ny, maxH - 30));
        w.el.style.left = nx + 'px';
        w.el.style.top  = ny + 'px';
      }
    }
    if (resizing) {
      const w = windows.get(resizing.id);
      if (w) {
        const nw = Math.max(320, resizing.startW + (e.clientX - resizing.startX));
        const nh = Math.max(200, resizing.startH + (e.clientY - resizing.startY));
        w.el.style.width  = nw + 'px';
        w.el.style.height = nh + 'px';
      }
    }
  });

  document.addEventListener('mouseup', () => {
    if (dragging) { dragging.overlay.remove(); dragging = null; }
    if (resizing) { resizing.overlay.remove(); resizing = null; }
  });

  /* ── Resize ── */
  let resizing = null;
  function onResizeMousedown(e) {
    const id = e.currentTarget.dataset.winId;
    const w  = windows.get(id);
    if (!w || w.el.classList.contains('maximized')) return;

    const overlay = document.createElement('div');
    overlay.className = 'win-drag-overlay';
    overlay.style.cursor = 'se-resize';
    document.body.appendChild(overlay);
    resizing = {
      id,
      startX: e.clientX, startY: e.clientY,
      startW: w.el.offsetWidth, startH: w.el.offsetHeight,
      overlay
    };
    e.preventDefault();
    e.stopPropagation();
  }

  /* ── Desktop click: deselect icons, close start menu ── */
  document.addEventListener('mousedown', e => {
    if (!e.target.closest('#start-menu') && !e.target.closest('#start-btn')) {
      document.getElementById('start-menu')?.classList.add('hidden');
    }
    // Deselect desktop icons
    if (!e.target.closest('.desktop-icon') && !e.target.closest('.os-window')) {
      document.querySelectorAll('.desktop-icon.selected').forEach(i => i.classList.remove('selected'));
    }
  });

  /* ── Public API ── */
  return { open, close, minimize, restore, toggle, toggleMaximize, focusWindow, windows };
})();
