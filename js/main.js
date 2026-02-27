/* ============================================================
   main.js  –  Entry point: boot sequence & initialization
   ============================================================ */

/* ── Theme Engine ── */
const ThemeEngine = (() => {
  const KEYS = {
    accent:      'portfolios_accent',
    clockFormat: 'portfolios_clock_format',
    iconSize:    'portfolios_icon_size',
  };

  const ICON_SIZES = {
    small:  { px: '32px', label: '9px'  },
    medium: { px: '48px', label: '11px' },
    large:  { px: '64px', label: '12px' },
  };

  function applyAccent(hue) {
    document.documentElement.style.setProperty('--accent-h', hue);
    localStorage.setItem(KEYS.accent, hue);
  }

  function applyIconSize(size) {
    const s = ICON_SIZES[size] || ICON_SIZES.medium;
    document.documentElement.style.setProperty('--icon-size', s.px);
    document.documentElement.style.setProperty('--icon-label-size', s.label);
    localStorage.setItem(KEYS.iconSize, size);
  }

  function setClockFormat(fmt) {
    localStorage.setItem(KEYS.clockFormat, fmt); // '12' or '24'
  }

  function clockFormat() {
    return localStorage.getItem(KEYS.clockFormat) || '24';
  }

  function currentAccent() {
    return localStorage.getItem(KEYS.accent) || '210';
  }

  function currentIconSize() {
    return localStorage.getItem(KEYS.iconSize) || 'medium';
  }

  function init() {
    applyAccent(currentAccent());
    applyIconSize(currentIconSize());
  }

  return { init, applyAccent, applyIconSize, setClockFormat, clockFormat, currentAccent, currentIconSize, ICON_SIZES };
})();

/* ── Wallpaper engine ── */
const Wallpaper = (() => {
  const STORAGE_KEY = 'portfolios_wallpaper';
  let wallpaperEl = null;

  function init() {
    // Create the wallpaper image layer (behind icons, above desktop gradient)
    wallpaperEl = document.createElement('img');
    wallpaperEl.id = 'desktop-wallpaper';
    wallpaperEl.draggable = false;
    document.getElementById('desktop').prepend(wallpaperEl);

    // Restore saved wallpaper
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) apply(saved);
  }

  function apply(src) {
    if (!src) {
      wallpaperEl.src = '';
      wallpaperEl.style.display = 'none';
      localStorage.removeItem(STORAGE_KEY);
    } else {
      wallpaperEl.src = src;
      wallpaperEl.style.display = 'block';
      localStorage.setItem(STORAGE_KEY, src);
    }
  }

  function current() {
    return localStorage.getItem(STORAGE_KEY) || null;
  }

  return { init, apply, current };
})();

window.addEventListener('DOMContentLoaded', () => {

  /* 1. Build desktop icons from registry */
  buildDesktopIcons();

  /* 2. Populate start menu */
  buildStartMenuApps();

  /* 3. Init virtual file system (indexes APP_REGISTRY + photo manifest) */
  FS.init();

  /* 4. Start taskbar (clock + start button) */
  Taskbar.init();

  /* 5. Init wallpaper engine */
  Wallpaper.init();

  /* 6. Init theme engine (accent, icon size, clock format) */
  ThemeEngine.init();

  /* 7. Boot animation then open Welcome window */
  bootSequence();
});

/* ── Boot Splash ── */
function bootSequence() {
  const splash = document.createElement('div');
  splash.id = 'boot-splash';
  splash.style.cssText = `
    position:fixed;inset:0;z-index:999999;
    background:#000;
    display:flex;flex-direction:column;
    align-items:center;justify-content:center;
  `;

  // segments fill the full track width
  const NUM_SEGS = 18;
  const bars = Array.from({ length: NUM_SEGS }, (_, i) =>
    `<div class="boot-bar-seg" id="boot-seg-${i}"></div>`
  ).join('');

  splash.innerHTML = `
    <style>
      .boot-track {
        width: 160px;
        height: 16px;
        border: 1px solid #3a3a3a;
        border-radius: 3px;
        background: #000;
        display: flex;
        align-items: stretch;
        padding: 2px 3px;
        gap: 2px;
        margin-bottom: 28px;
        box-shadow: inset 0 1px 4px rgba(0,0,0,0.9);
        overflow: hidden;
      }
      .boot-bar-seg {
        flex: 1;
        border-radius: 1px;
        background: transparent;
        transition: background 0.05s;
      }
      .boot-bar-seg.lit {
        background: linear-gradient(
          180deg,
          #f0ff98 0%,
          #c0e030 20%,
          #80b010 60%,
          #3a5a04 100%
        );
      }
      .boot-copyright {
        position: absolute;
        bottom: 48px;
        left: 50%;
        transform: translateX(-50%);
        color: #555;
        font-family: 'Segoe UI', Tahoma, sans-serif;
        font-size: 11px;
        white-space: nowrap;
      }
    </style>
    <div class="boot-track">${bars}</div>
    <div class="boot-copyright">© Some Corporation</div>
  `;

  document.body.appendChild(splash);

  // A group of 4 consecutive segments sweeps across 18, looping
  const NUM   = 18;
  const WIN   = 4;
  let   pos   = -WIN;
  let   loops = 0;
  const MAX   = 1;

  const segs = splash.querySelectorAll('.boot-bar-seg');

  const interval = setInterval(() => {
    segs.forEach((s, i) => {
      s.classList.toggle('lit', i >= pos && i < pos + WIN);
    });

    pos++;
    if (pos >= NUM) {
      pos = -WIN;
      loops++;
    }

    if (loops >= MAX) {
      clearInterval(interval);
      segs.forEach(s => s.classList.remove('lit'));
      setTimeout(() => {
        splash.style.transition = 'opacity 0.7s ease';
        splash.style.opacity = '0';
        setTimeout(() => {
          splash.remove();
          launchApp('welcome');
        }, 720);
      }, 200);
    }
  }, 80);
}
