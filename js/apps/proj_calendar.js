/* ============================================================
   proj_calendar.js  –  Google Calendar Dashboard detail window
   ============================================================
   Opened by double-clicking the calendar card in projects.js.
   Replace images/projects/calendar.jpg with a real screenshot.
   ============================================================ */

APP_REGISTRY.push({
  id: 'proj_calendar',
  title: 'Google Calendar Dashboard',
  iconPath: 'icons/windows_vista/vista_cal_1.ico',
  width: 680,
  height: 520,
  singleton: true,
  showOnDesktop: false,
  content: `
    <div class="proj-detail">
      <div class="proj-detail-screenshot">
        <img src="images/projects/calendar.jpg" alt="Calendar Dashboard screenshot">
      </div>
      <div class="proj-detail-body">
        <h1>Web Dashboard — Google Calendar API</h1>
        <p class="card-meta">Personal Project · 2024</p>
        <p>Built a browser-based dashboard for visualizing and managing Google Calendar events.
           Integrates with the Google Calendar API for real-time data retrieval and features
           a clean separation between presentation and application logic.</p>
        <h2>Key Features</h2>
        <ul class="card-list">
          <li>OAuth 2.0 authentication flow with Google</li>
          <li>Fetches, displays, and filters calendar events in real time</li>
          <li>Week and month views with colour-coded event categories</li>
          <li>Event creation and deletion via API</li>
          <li>Clean MVC-style architecture in vanilla JavaScript</li>
        </ul>
        <div class="project-tags" style="margin-top:12px">
          <span class="project-tag">HTML</span>
          <span class="project-tag">CSS</span>
          <span class="project-tag">JavaScript</span>
          <span class="project-tag">Google Calendar API</span>
          <span class="project-tag">OAuth 2.0</span>
        </div>
      </div>
    </div>
  `
});
