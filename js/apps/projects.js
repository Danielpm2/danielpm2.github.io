/* ============================================================
   projects.js  –  Projects launcher app
   ============================================================
   Shows a grid of project cards. Double-clicking a card opens
   the corresponding project detail window (proj_chess, etc.)
   ============================================================ */

APP_REGISTRY.push({
  id: 'projects',
  title: 'Projects',
  iconPath: 'icons/windows_vista/vista_bench.ico',
  width: 580,
  height: 400,
  singleton: true,
  showOnDesktop: true,
  content: `
    <h1>Projects</h1>
    <p>Click a project to open it.</p>

    <h2>Academic</h2>
    <div class="proj-launcher-grid">
      <div class="proj-launcher-card" ondblclick="launchApp('proj_chess')">
        <div class="proj-launcher-thumb">
          <img src="images/projects/chess.jpg" alt="Chess Platform">
        </div>
        <div class="proj-launcher-icon">
          <img src="icons/windows_vista/vista_xbox.ico" width="24" height="24">
        </div>
        <div class="proj-launcher-info">
          <div class="proj-launcher-name">Online Chess Platform</div>
          <div class="proj-launcher-meta">JavaScript · WebSockets · 2025</div>
        </div>
      </div>
      <div class="proj-launcher-card" ondblclick="launchApp('proj_banking')">
        <div class="proj-launcher-thumb">
          <img src="images/projects/banking.png" alt="Banking App">
        </div>
        <div class="proj-launcher-icon">
          <img src="icons/windows_vista/vista_firewall_1.ico" width="24" height="24">
        </div>
        <div class="proj-launcher-info">
          <div class="proj-launcher-name">Banking App Testing</div>
          <div class="proj-launcher-meta">Java · JUnit · TDD · 2025</div>
        </div>
      </div>
    </div>

    <h2>Personal</h2>
    <div class="proj-launcher-grid">
      <div class="proj-launcher-card" ondblclick="launchApp('proj_calendar')">
        <div class="proj-launcher-thumb">
          <img src="images/projects/calendar.jpg" alt="Calendar Dashboard">
        </div>
        <div class="proj-launcher-icon">
          <img src="icons/windows_vista/vista_cal_1.ico" width="24" height="24">
        </div>
        <div class="proj-launcher-info">
          <div class="proj-launcher-name">Google Calendar Dashboard</div>
          <div class="proj-launcher-meta">JavaScript · Google API · 2024</div>
        </div>
      </div>
      <div class="proj-launcher-card" ondblclick="launchApp('proj_fractal')">
        <div class="proj-launcher-thumb">
          <img src="images/projects/fractal.png" alt="Fractal Visualizer">
        </div>
        <div class="proj-launcher-icon">
          <img src="icons/windows_vista/vista_perf_center.ico" width="24" height="24">
        </div>
        <div class="proj-launcher-info">
          <div class="proj-launcher-name">Mandelbrot Fractal Visualizer</div>
          <div class="proj-launcher-meta">C++ · OpenGL · Qt 6 · 2025</div>
        </div>
      </div>
    </div>
    <p style="font-size:11px;color:#4a6a90;margin-top:12px">Double-click a card to open the project details.</p>
  `
});
