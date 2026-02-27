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

    // Double click = open (desktop)
    icon.addEventListener('dblclick', e => {
      e.stopPropagation();
      launchApp(app.id);
    });

    // Single tap = open on mobile (touch devices have no dblclick)
    let tapTimer = null;
    icon.addEventListener('touchend', e => {
      e.stopPropagation();
      if (tapTimer) {
        // Second tap within 350ms = open
        clearTimeout(tapTimer);
        tapTimer = null;
        launchApp(app.id);
      } else {
        // First tap = select
        document.querySelectorAll('.desktop-icon.selected').forEach(i => i.classList.remove('selected'));
        icon.classList.add('selected');
        tapTimer = setTimeout(() => { tapTimer = null; }, 350);
      }
    }, { passive: true });

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
  let binClickCount = 0;
  const binMessages = [
    'Recycle Bin is empty. Don\'t try again',
    'Still empty. Nothing to see here.',
    'Are you really clicking this again?',
    'I said it\'s empty!',
    'Ok you need to stop.',
    'Why would you throw away my hard work like that?',
    'STOP.',
    'I am begging you.',
    '...',
    'I give up',
    'You win. Recycle Bin is now full of regrets and bad decisions.'
  ];

  bin.addEventListener('dblclick', e => {
    e.stopPropagation();
    const msg = binMessages[Math.min(binClickCount, binMessages.length - 1)];
    showToast(msg);
    binClickCount++;
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

  // Singleton apps: focus existing window if already open
  if (app.singleton) {
    WindowManager.open(app);
    return;
  }

  // Non-singleton: always create a unique instance so each window can be
  // independently closed/minimized (avoids Map key collision).
  const instanceId = id + '_' + Date.now();
  const content = (args && typeof app.buildContent === 'function')
    ? app.buildContent(args)
    : (app.content || '');
  const instance = Object.assign({}, app, {
    id: instanceId,
    content,
    _args: args || null,
    singleton: false
  });
  WindowManager.open(instance);
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
