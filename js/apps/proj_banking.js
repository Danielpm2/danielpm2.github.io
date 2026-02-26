/* ============================================================
   proj_banking.js  –  Banking App Testing detail window
   ============================================================
   Opened by double-clicking the banking card in projects.js.
   Replace images/projects/banking.png with a real screenshot.
   ============================================================ */

APP_REGISTRY.push({
  id: 'proj_banking',
  title: 'Banking App — Testing & Maintenance',
  iconPath: 'icons/windows_vista/vista_firewall_1.ico',
  width: 680,
  height: 520,
  singleton: true,
  showOnDesktop: false,
  content: `
    <div class="proj-detail">
      <div class="proj-detail-screenshot">
        <img src="images/projects/banking.png" alt="Banking App screenshot">
      </div>
      <div class="proj-detail-body">
        <h1>Banking Application Testing &amp; Maintenance</h1>
        <p class="card-meta">Academic Project · Java · 2025</p>
        <p>Took ownership of an existing Java banking application to identify defects,
           improve code quality, and establish a comprehensive test suite following
           test-driven development principles.</p>
        <h2>Key Features</h2>
        <ul class="card-list">
          <li>Systematic defect analysis and bug reporting across all modules</li>
          <li>Unit and integration tests written with JUnit 5</li>
          <li>Applied TDD and red-green-refactor cycles for all bug fixes</li>
          <li>Improved code maintainability through refactoring and documentation</li>
          <li>Coverage reporting and regression test suite</li>
        </ul>
        <div class="project-tags" style="margin-top:12px">
          <span class="project-tag">Java</span>
          <span class="project-tag">JUnit 5</span>
          <span class="project-tag">TDD</span>
          <span class="project-tag">Refactoring</span>
          <span class="project-tag">Maven</span>
        </div>
      </div>
    </div>
  `
});
