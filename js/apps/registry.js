/* ============================================================
   _registry.js  –  App registry initializer + core builders
   ============================================================
   This file MUST be loaded first (before any app-*.js files).

   To add a new app:
   1. Create a new file in js/apps/ (e.g. js/apps/myapp.js)
   2. In that file, call: APP_REGISTRY.push({ id: 'myapp', ... })
   3. Add a <script> tag for it in index.html AFTER this file
   ============================================================ */

const APP_REGISTRY = [];

/* ============================================================
   Desktop Icon Builder
   ============================================================ */
function buildDesktopIcons() {
  const container = document.getElementById('desktop-icons');
  container.innerHTML = '';

  APP_REGISTRY.filter(a => a.showOnDesktop).forEach(app => {
    const icon = document.createElement('div');
    icon.className = 'desktop-icon';
    icon.dataset.appId = app.id;
    icon.innerHTML = `
      <div class="icon-img">${iconHTML(app, 48)}</div>
      <div class="icon-label">${app.title}</div>
    `;

    // Single click = select
    icon.addEventListener('click', e => {
      e.stopPropagation();
      document.querySelectorAll('.desktop-icon.selected').forEach(i => i.classList.remove('selected'));
      icon.classList.add('selected');
    });

    // Double click = open
    icon.addEventListener('dblclick', e => {
      e.stopPropagation();
      launchApp(app.id);
    });

    container.appendChild(icon);
  });

  // Add Recycle Bin (non-app, decorative)
  const bin = document.createElement('div');
  bin.className = 'desktop-icon';
  bin.innerHTML = `
    <div class="icon-img"><img src="icons/utilities/trashbin1.ico" width="48" height="48" alt="Recycle Bin" draggable="false"></div>
    <div class="icon-label">Recycle Bin</div>
  `;
  bin.addEventListener('click', e => {
    e.stopPropagation();
    document.querySelectorAll('.desktop-icon.selected').forEach(i => i.classList.remove('selected'));
    bin.classList.add('selected');
  });
  bin.addEventListener('dblclick', e => {
    e.stopPropagation();
    showToast('Recycle Bin is empty.');
  });
  container.appendChild(bin);
}

/* ============================================================
   Start Menu App List Builder
   ============================================================ */
function buildStartMenuApps() {
  const ul = document.getElementById('start-menu-apps');
  ul.innerHTML = '';
  APP_REGISTRY.forEach(app => {
    const li = document.createElement('li');
    li.className = 'sm-app-item';
    li.innerHTML = `<span class="sm-icon">${iconHTML(app, 24)}</span><span>${app.title}</span>`;
    li.addEventListener('click', () => {
      document.getElementById('start-menu').classList.add('hidden');
      launchApp(app.id);
    });
    ul.appendChild(li);
  });
}

/* ============================================================
   Launch App by ID
   ============================================================
   Pass an optional `args` object for apps that need runtime
   context (e.g. explorer path, photos image src).
   The WindowManager receives a shallow clone of the app config
   so the registry entry itself is never mutated.
   ============================================================ */
function launchApp(id, args) {
  const app = APP_REGISTRY.find(a => a.id === id);
  if (!app) return;

  // Apps that accept args (explorer, photos) generate content dynamically
  if (args && typeof app.buildContent === 'function') {
    const instanceId = id + '_' + Date.now();
    const instance = Object.assign({}, app, {
      id: instanceId,
      content: app.buildContent(args),
      _args: args,
      singleton: false
    });
    WindowManager.open(instance);
  } else {
    WindowManager.open(app);
  }
}

/* ============================================================
   Toast Notification
   ============================================================ */
function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'os-toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3100);
}

// Expose globally
window.launchApp = launchApp;
window.showToast = showToast;
