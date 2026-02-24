/* ============================================================
   main.js  –  Entry point: boot sequence & initialization
   ============================================================ */

window.addEventListener('DOMContentLoaded', () => {

  /* 1. Build desktop icons from registry */
  buildDesktopIcons();

  /* 2. Populate start menu */
  buildStartMenuApps();

  /* 3. Start taskbar (clock + start button) */
  Taskbar.init();

  /* 4. Boot animation then open Welcome window */
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
    gap:20px;
    transition:opacity 0.8s ease;
  `;
  splash.innerHTML = `
    <div style="font-size:56px;filter:drop-shadow(0 0 24px rgba(80,180,255,0.8));
                animation:boot-spin 2s linear infinite">⊙</div>
    <div style="color:#4a9eee;font-family:'Segoe UI',sans-serif;font-size:18px;
                letter-spacing:4px;font-weight:300">
      Loading...
    </div>
    <div style="width:220px;height:4px;background:rgba(255,255,255,0.1);
                border-radius:2px;overflow:hidden;margin-top:8px">
      <div id="boot-bar" style="height:100%;width:0;
           background:linear-gradient(90deg,#3a8fee,#7fd4f8);
           border-radius:2px;transition:width 1.2s ease;
           box-shadow:0 0 10px rgba(80,180,255,0.7)"></div>
    </div>
    <style>
      @keyframes boot-spin {
        from { transform:rotate(0deg); }
        to   { transform:rotate(360deg); }
      }
    </style>
  `;
  document.body.appendChild(splash);

  // Animate progress bar
  requestAnimationFrame(() => {
    document.getElementById('boot-bar').style.width = '100%';
  });

  // Fade out and open welcome window
  setTimeout(() => {
    splash.style.opacity = '0';
    setTimeout(() => {
      splash.remove();
      launchApp('welcome');
    }, 850);
  }, 1600);
}
