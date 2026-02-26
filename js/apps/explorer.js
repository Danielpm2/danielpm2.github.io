/* ============================================================
   explorer.js  –  File Explorer app
   ============================================================
   Launched with: launchApp('explorer')           → opens C:\
                  launchApp('explorer', { path: ['C:\\', 'Photos'] })
   ============================================================ */

/* ── Icon helper for FS nodes ── */
function fsNodeIconHTML(node, size) {
  if (node.type === 'folder') {
    // Always show a folder icon — use a specific Vista folder icon if set,
    // otherwise fall back to the generic yellow folder
    const src = 'icons/utilities/explorer.ico';
    return `<img src="${src}" width="${size}" height="${size}" draggable="false" style="object-fit:contain">`;
  }
  if (node.type === 'exe') {
    return node.icon
      ? `<img src="${node.icon}" width="${size}" height="${size}" draggable="false" style="object-fit:contain">`
      : `<span style="font-size:${size * 0.7}px">⚙️</span>`;
  }
  if (node.type === 'img') {
    // Show a tiny thumbnail
    return `<img src="${node.src}" width="${size}" height="${size}" draggable="false" style="object-fit:cover;border-radius:2px;border:1px solid rgba(0,0,0,0.15)">`;
  }
  if (node.type === 'txt') {
    const src = node.icon || 'icons/windows_vista/vista_sidebar_2.ico';
    return `<img src="${src}" width="${size}" height="${size}" draggable="false" style="object-fit:contain">`;
  }
  return `<span style="font-size:${size * 0.7}px">📄</span>`;
}

/* ── Build the explorer HTML for a given path ── */
function buildExplorerHTML(path) {
  const items = FS.listFolder(path);
  const pathStr = path.join('\\');

  // Sidebar: always shows the root tree top level
  const rootChildren = FS.tree.children.filter(c => c.type === 'folder');
  const sidebarItems = [
    { name: 'C:\\', path: ['C:\\'], icon: 'icons/windows_vista/vista_pc_1.ico' },
    ...rootChildren.map(c => ({
      name: c.name,
      path: ['C:\\', c.name],
      icon: c.sidebarIcon || 'icons/utilities/explorer.ico'
    }))
  ];

  const sidebarHTML = sidebarItems.map(item => {
    const active = item.path.join('\\') === pathStr ? 'explorer-sidebar-item--active' : '';
    return `
      <div class="explorer-sidebar-item ${active}" data-path="${encodeURIComponent(JSON.stringify(item.path))}">
        <img src="${item.icon}" width="16" height="16" style="object-fit:contain;flex-shrink:0">
        <span>${item.name}</span>
      </div>`;
  }).join('');

  // Main grid
  const mainHTML = items.length === 0
    ? `<div class="explorer-empty">This folder is empty.</div>`
    : items.map((node, i) => `
      <div class="explorer-item" data-index="${i}" data-path="${encodeURIComponent(JSON.stringify(path))}">
        <div class="explorer-item-icon">${fsNodeIconHTML(node, 40)}</div>
        <div class="explorer-item-label">${node.name}</div>
      </div>`).join('');

  return `
    <div class="explorer-shell">
      <div class="explorer-addressbar">
        ${path.length > 1
          ? `<button class="explorer-back-btn" data-parent-path="${encodeURIComponent(JSON.stringify(path.slice(0, -1)))}">&#8592;</button>`
          : `<button class="explorer-back-btn" disabled>&#8592;</button>`}
        <img src="icons/utilities/explorer.ico" width="14" height="14" style="object-fit:contain">
        <span>${pathStr}</span>
      </div>
      <div class="explorer-body">
        <div class="explorer-sidebar">${sidebarHTML}</div>
        <div class="explorer-main" data-current-path="${encodeURIComponent(JSON.stringify(path))}">
          ${mainHTML}
        </div>
      </div>
    </div>`;
}

/* ── Wire up click/double-click events after window opens ── */
function explorerOnOpen(el, path) {
  // Back button
  el.querySelector('.explorer-back-btn:not([disabled])')?.addEventListener('click', e => {
    const parentPath = JSON.parse(decodeURIComponent(e.currentTarget.dataset.parentPath));
    refreshExplorer(el, parentPath);
  });

  // Sidebar navigation (single click) — navigate in-place
  el.querySelectorAll('.explorer-sidebar-item').forEach(item => {
    item.addEventListener('click', () => {
      const p = JSON.parse(decodeURIComponent(item.dataset.path));
      refreshExplorer(el, p);
    });
  });

  // Main grid double-click
  el.querySelectorAll('.explorer-item').forEach(item => {
    item.addEventListener('dblclick', () => {
      const currentPath = JSON.parse(decodeURIComponent(
        el.querySelector('.explorer-main').dataset.currentPath
      ));
      const idx = parseInt(item.dataset.index, 10);
      const node = FS.listFolder(currentPath)[idx];
      if (!node) return;
      if (node.type === 'folder') {
        // Navigate in-place
        refreshExplorer(el, [...currentPath, node.name]);
      } else {
        FS.openNode(node, currentPath);
      }
    });
    // Single click = select
    item.addEventListener('click', e => {
      e.stopPropagation();
      el.querySelectorAll('.explorer-item.selected').forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');
    });
  });
}

function refreshExplorer(winEl, path) {
  const content = winEl.querySelector('.app-content');
  if (content) content.innerHTML = buildExplorerHTML(path);
  explorerOnOpen(winEl, path);
}

/* ── Register the app ── */
APP_REGISTRY.push({
  id: 'explorer',
  title: 'File Explorer',
  iconPath: 'icons/utilities/explorer.ico',
  width: 640,
  height: 440,
  singleton: false,    // allow multiple explorer windows
  showOnDesktop: true,

  buildContent(args) {
    const path = (args && args.path) ? args.path : ['C:\\'];
    return buildExplorerHTML(path);
  },

  // Default content (no args) = C:\
  get content() {
    return buildExplorerHTML(['C:\\']);
  },

  onOpen(winEl, args) {
    const path = (args && args.path) ? args.path : ['C:\\'];
    explorerOnOpen(winEl, path);
  }
});
