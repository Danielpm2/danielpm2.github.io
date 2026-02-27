# PortfoliOS

A browser-based portfolio built to look and feel like **Windows Vista**  complete with a boot sequence, draggable windows, a taskbar, a Start menu, a virtual file system, and individual apps for each section of the portfolio.

Live at → **[danielpm2.github.io](https://danielpm2.github.io)**

A bunch of features to come next but this is functionnal for now. I've made it so that adding apps is extremely easy (see below).

---

## Features

- **Windowed UI** — every app opens in a draggable, resizable, minimizable, maximizable window with Aero-style chrome
- **Taskbar & Start Menu** — running windows appear in the taskbar; the Start menu lists all apps and quick-links to Documents, Pictures, and Computer
- **Virtual File System** — a `C:\` tree with `Programs`, `Photos`, and `Documents` folders, navigable through File Explorer
- **File Explorer** — two-panel explorer (sidebar + main grid) with back navigation and in-place folder browsing
- **Photos viewer** — opens images from the virtual file system with previous/next navigation
- **Modular app registry** — each app lives in its own file under `js/apps/`; adding a new app is a one-file change

---

## Apps

| App | Description |
|---|---|
| **Welcome** | Landing screen shown on first boot |
| **About** | Short bio |
| **Skills** | Tech stack overview |
| **Resume** | Inline résumé viewer |
| **Projects** | Hub linking to individual project showcases |
| **Chess** | Project showcase — chess engine |
| **Banking App** | Project showcase — banking dashboard |
| **Calendar** | Project showcase — calendar app |
| **Fractal Explorer** | Project showcase — interactive fractal renderer |
| **Contact** | Contact links |
| **File Explorer** | Virtual filesystem browser |
| **Photos** | (WIP) Image viewer |

---

## Project Structure

```
index.html          # Single-page shell
css/
  os.css            # Desktop, boot splash, global resets
  windows.css       # Window chrome, animations
  taskbar.css       # Taskbar & tray
  startmenu.css     # Start menu
  apps.css          # Per-app content styles
js/
  utils.js          # Shared helpers (iconHTML, etc.)
  windowManager.js  # Window lifecycle (open, close, minimize, maximize, drag, resize)
  fs.js             # Virtual file system (FS_TREE, FS.listFolder, FS.openNode)
  taskbar.js        # Taskbar button management
  main.js           # Boot sequence + DOMContentLoaded init
  apps/
    registry.js     # APP_REGISTRY, launchApp(), showToast(), desktop/start-menu builders
    about.js
    contact.js
    explorer.js     # File Explorer (two-panel, navigable)
    photos.js       # Photo viewer (prev/next)
    projects.js
    proj_banking.js
    proj_calendar.js
    proj_chess.js
    proj_fractal.js
    resume.js
    skills.js
    welcome.js
icons/              # .ico assets (Vista icon set + utilities)
photos/             # Images served into the virtual Photos folder
images/projects/    # Project screenshot thumbnails
```

---

## Tech Stack

- **Vanilla HTML / CSS / JavaScript** — zero dependencies, no build step
- Hosted on **GitHub Pages** with `.nojekyll` to bypass Jekyll processing

---

## Running Locally

No build step required — just open `index.html` in a browser, or serve the folder with any static server:

```bash
npx serve .
# or
python -m http.server
```

Then visit `http://localhost:3000` (or whichever port your server uses).

---

## Adding a New App

1. Create `js/apps/myapp.js` and push an entry onto `APP_REGISTRY`:

```js
APP_REGISTRY.push({
  id: 'myapp',
  title: 'My App',
  iconPath: 'icons/...',
  singleton: true,
  showOnDesktop: true,
  content: `<div class="myapp-shell">Hello!</div>`,
});
```

2. Add a `<script>` tag in `index.html` after `registry.js`:

```html
<script src="js/apps/myapp.js"></script>
```

3. Add any styles to `css/apps.css`.

That's it, the app will appear on the desktop and in the Start menu automatically.
