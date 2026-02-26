/* ============================================================
   welcome.js  –  Welcome / splash app (auto-launched on boot)
   ============================================================ */

APP_REGISTRY.push({
  id: 'welcome',
  title: 'Welcome',
  iconPath: 'icons/windows_vista/vista_get_started.ico',
  width: 440,
  height: 320,
  singleton: true,
  showOnDesktop: true,
  content: `
    <div class="welcome-content">
      <div class="welcome-logo">
        <img src="icons/windows_vista/vista_get_started.ico" width="80" height="80" alt="Welcome" draggable="false">
      </div>
      <h1>Daniel OS</h1>
      <p>Montreal based Software Engineering Student</p>
      <p style="margin-top:6px;font-size:12px;color:#7090b0">
        More on this site to come :).<br>
      </p>
    </div>
  `
});
