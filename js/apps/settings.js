/* ============================================================
   settings.js  –  Settings app
   ============================================================ */

const ACCENT_PRESETS = [
  { label: 'Sky (Default)', h: 210  },
  { label: 'Emerald',       h: 150  },
  { label: 'Rose',          h: 345  },
  { label: 'Amber',         h: 38   },
  { label: 'Violet',        h: 270  },
  { label: 'Teal',          h: 180  },
  { label: 'Coral',         h: 15   },
  { label: 'Indigo',        h: 235  },
];

function buildSettingsHTML() {
  const photos = FS.tree.children.find(c => c.name === 'Photos')?.children || [];

  /* ── Wallpaper thumbs ── */
  const thumbs = photos.map(p => {
    const active = Wallpaper.current() === p.src ? 'settings-wallpaper-thumb--active' : '';
    return `
      <div class="settings-wallpaper-thumb ${active}" data-src="${p.src}" title="${p.name}">
        <img src="${p.src}" draggable="false">
        <span>${p.name}</span>
      </div>`;
  }).join('');
  const noneActive = !Wallpaper.current() ? 'settings-wallpaper-thumb--active' : '';

  /* ── Accent swatches ── */
  const curAccent = ThemeEngine.currentAccent();
  const swatches = ACCENT_PRESETS.map(p => {
    const active = String(p.h) === String(curAccent) ? 'settings-swatch--active' : '';
    return `<div class="settings-swatch ${active}" data-hue="${p.h}" title="${p.label}"
                 style="background: hsl(${p.h}, 75%, 55%)"></div>`;
  }).join('');

  /* ── Clock format ── */
  const fmt = ThemeEngine.clockFormat();

  /* ── Icon size ── */
  const curSize = ThemeEngine.currentIconSize();

  return `
    <h1>Settings</h1>

    <div class="settings-section">
      <div class="settings-section-title">
        <img src="icons/windows_vista/vista_personalization.ico" class="ico-md"> Desktop Background
      </div>
      <div class="settings-wallpaper-grid">
        <div class="settings-wallpaper-thumb ${noneActive}" data-src="" title="Default">
          <div class="settings-wallpaper-default"></div>
          <span>Default</span>
        </div>
        ${thumbs}
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-section-title">
        <img src="icons/windows_vista/vista_personalization.ico" class="ico-md"> Accent Colour
      </div>
      <div class="settings-swatch-row">${swatches}</div>
    </div>

    <div class="settings-section">
      <div class="settings-section-title">
        <img src="icons/windows_vista/vista_cal_1.ico" class="ico-md"> Clock Format
      </div>
      <div class="settings-toggle-row">
        <button class="settings-toggle-btn ${fmt === '24' ? 'settings-toggle-btn--active' : ''}" data-clock="24">24-hour</button>
        <button class="settings-toggle-btn ${fmt === '12' ? 'settings-toggle-btn--active' : ''}" data-clock="12">12-hour</button>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-section-title">
        <img src="icons/windows_vista/vista_sidebar_1.ico" class="ico-md"> Desktop Icon Size
      </div>
      <div class="settings-toggle-row">
        <button class="settings-toggle-btn ${curSize === 'small'  ? 'settings-toggle-btn--active' : ''}" data-iconsize="small">Small</button>
        <button class="settings-toggle-btn ${curSize === 'medium' ? 'settings-toggle-btn--active' : ''}" data-iconsize="medium">Medium</button>
        <button class="settings-toggle-btn ${curSize === 'large'  ? 'settings-toggle-btn--active' : ''}" data-iconsize="large">Large</button>
      </div>
    </div>
  `;
}

function settingsOnOpen(winEl) {
  function refresh() {
    winEl.querySelector('.app-content').innerHTML = buildSettingsHTML();
    settingsOnOpen(winEl);
  }

  // Wallpaper
  winEl.querySelectorAll('.settings-wallpaper-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      Wallpaper.apply(thumb.dataset.src || null);
      refresh();
    });
  });

  // Accent
  winEl.querySelectorAll('.settings-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      ThemeEngine.applyAccent(swatch.dataset.hue);
      refresh();
    });
  });

  // Clock format
  winEl.querySelectorAll('[data-clock]').forEach(btn => {
    btn.addEventListener('click', () => {
      ThemeEngine.setClockFormat(btn.dataset.clock);
      // Force clock to re-render immediately
      document.getElementById('taskbar-clock').dispatchEvent(new Event('refresh'));
      refresh();
    });
  });

  // Icon size
  winEl.querySelectorAll('[data-iconsize]').forEach(btn => {
    btn.addEventListener('click', () => {
      ThemeEngine.applyIconSize(btn.dataset.iconsize);
      refresh();
    });
  });
}

APP_REGISTRY.push({
  id: 'settings',
  title: 'Settings',
  iconPath: 'icons/windows_vista/vista_personalization.ico',
  width: 580,
  height: 520,
  singleton: true,
  showOnDesktop: false,
  showInStartMenu: false,

  get content() { return buildSettingsHTML(); },
  onOpen(winEl) { settingsOnOpen(winEl); },
});
