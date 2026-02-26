/* ============================================================
   proj_chess.js  –  Online Chess Platform detail window
   ============================================================
   Opened by double-clicking the chess card in projects.js.
   Replace images/projects/chess.jpg with a real screenshot.
   ============================================================ */

APP_REGISTRY.push({
  id: 'proj_chess',
  title: 'Online Chess Platform',
  iconPath: 'icons/windows_vista/vista_xbox.ico',
  width: 680,
  height: 520,
  singleton: true,
  showOnDesktop: false,
  content: `
    <div class="proj-detail">
      <div class="proj-detail-screenshot">
        <img src="images/projects/chess.jpg" alt="Chess Platform screenshot">
      </div>
      <div class="proj-detail-body">
        <h1>Real-Time Online Chess Platform</h1>
        <p class="card-meta">End-of-Session Academic Project · 2025</p>
        <p>Designed and implemented a full-stack real-time multiplayer chess web application.
           Features include live gameplay via WebSockets, user authentication, a persistent
           match history database, and a clean browser-based board UI.</p>
        <h2>Key Features</h2>
        <ul class="card-list">
          <li>WebSocket-based real-time move synchronization between two players</li>
          <li>Client–server architecture with Node.js + Express backend</li>
          <li>MySQL database for user accounts and game history persistence</li>
          <li>Full chess rule enforcement (check, checkmate, castling, en passant)</li>
          <li>Responsive board UI built in vanilla JavaScript</li>
        </ul>
        <div class="project-tags" style="margin-top:12px">
          <span class="project-tag">JavaScript</span>
          <span class="project-tag">Node.js</span>
          <span class="project-tag">WebSockets</span>
          <span class="project-tag">MySQL</span>
          <span class="project-tag">Express</span>
          <span class="project-tag">HTML/CSS</span>
        </div>
      </div>
    </div>
  `
});
