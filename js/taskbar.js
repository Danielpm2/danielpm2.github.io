/* ============================================================
   taskbar.js  –  Taskbar window buttons, clock, start menu
   ============================================================ */

const Taskbar = (() => {

  /* ── Clock ── */
  function updateClock() {
    const el = document.getElementById('taskbar-clock');
    if (!el) return;
    const now = new Date();
    const h   = String(now.getHours()).padStart(2, '0');
    const m   = String(now.getMinutes()).padStart(2, '0');
    const d   = now.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    el.innerHTML = `${h}:${m}<br><span style="font-size:9px;font-weight:400;color:#8ab0d0">${d}</span>`;
  }

  function initClock() {
    updateClock();
    setInterval(updateClock, 10000);
  }

  /* ── Start Button ── */
  function initStartMenu() {
    const btn  = document.getElementById('start-btn');
    const menu = document.getElementById('start-menu');

    btn.addEventListener('click', e => {
      e.stopPropagation();
      menu.classList.toggle('hidden');
    });

    // Right-panel items
    document.getElementById('sm-documents')?.addEventListener('click', () => {
      menu.classList.add('hidden');
      launchApp('explorer', { path: ['C:\\', 'Documents'] });
    });
    document.getElementById('sm-pictures')?.addEventListener('click', () => {
      menu.classList.add('hidden');
      launchApp('explorer', { path: ['C:\\', 'Photos'] });
    });
    document.getElementById('sm-computer')?.addEventListener('click', () => {
      menu.classList.add('hidden');
      launchApp('explorer');
    });
    document.getElementById('sm-shutdown')?.addEventListener('click', () => {
      menu.classList.add('hidden');
      shutdownAnimation();
    });
  }

  /* ── Shutdown animation ── */
  function shutdownAnimation() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;inset:0;z-index:99999;
      background:#000;opacity:0;
      display:flex;align-items:center;justify-content:center;
      transition:opacity 1.2s ease;
    `;
    overlay.innerHTML = `
      <img src="images/shutdown.gif"
           alt=""
           style="max-width:320px;max-height:320px;object-fit:contain;pointer-events:none;">
    `;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
    });
    setTimeout(() => {
      overlay.style.transition = 'opacity 0.8s ease';
      overlay.style.opacity = '0';
      setTimeout(() => overlay.remove(), 900);
    }, 3000);
  }

  /* ── Taskbar Window Buttons ── */
  function addButton(id, config) {
    const bar = document.getElementById('taskbar-windows');
    const btn = document.createElement('button');
    btn.className = 'taskbar-win-btn active';
    btn.id = `tb-btn-${id}`;
    btn.innerHTML = `
      <span class="taskbar-btn-icon">${iconHTML(config, 18)}</span>
      <span class="taskbar-btn-label">${config.title}</span>
    `;
    btn.title = config.title;
    btn.addEventListener('click', () => WindowManager.toggle(id));
    bar.appendChild(btn);
  }

  function removeButton(id) {
    document.getElementById(`tb-btn-${id}`)?.remove();
  }

  function setMinimized(id, minimized) {
    const btn = document.getElementById(`tb-btn-${id}`);
    if (!btn) return;
    btn.classList.toggle('minimized-btn', minimized);
    btn.classList.toggle('active', !minimized);
  }

  /* ── Init ── */
  function init() {
    initClock();
    initStartMenu();
  }

  return { init, addButton, removeButton, setMinimized };
})();
