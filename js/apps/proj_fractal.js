/* ============================================================
   proj_fractal.js  –  Mandelbrot Fractal Visualizer detail window
   ============================================================
   Opened by double-clicking the fractal card in projects.js.
   Replace images/projects/fractal.png with a real screenshot.
   ============================================================ */

APP_REGISTRY.push({
  id: 'proj_fractal',
  title: 'Mandelbrot Fractal Visualizer',
  iconPath: 'icons/windows_vista/vista_perf_center.ico',
  width: 680,
  height: 520,
  singleton: true,
  showOnDesktop: false,
  content: `
    <div class="proj-detail">
      <div class="proj-detail-screenshot">
        <img src="images/projects/fractal.png" alt="Fractal Visualizer screenshot">
      </div>
      <div class="proj-detail-body">
        <h1>Mandelbrot Fractal Visualizer</h1>
        <p class="card-meta">Personal Project · C++ / OpenGL · 2025</p>
        <p>Designed and developed a real-time interactive graphics application in C++ using
           OpenGL and Qt 6. Renders the Mandelbrot set with configurable iteration depth,
           smooth colour mapping via GLSL shaders, and fluid zoom/pan navigation.</p>
        <h2>Key Features</h2>
        <ul class="card-list">
          <li>Real-time GPU rendering via GLSL fragment shaders</li>
          <li>Smooth colouring algorithm for iteration bands</li>
          <li>Interactive zoom and pan with arbitrary precision</li>
          <li>Configurable max iterations and colour palettes</li>
          <li>Qt 6 GUI with parameter controls and export functionality</li>
        </ul>
        <div class="project-tags" style="margin-top:12px">
          <span class="project-tag">C++</span>
          <span class="project-tag">OpenGL</span>
          <span class="project-tag">GLSL</span>
          <span class="project-tag">Qt 6</span>
          <span class="project-tag">CMake</span>
          <span class="project-tag">Computer Graphics</span>
        </div>
      </div>
    </div>
  `
});
