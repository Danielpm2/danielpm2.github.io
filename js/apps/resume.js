/* ============================================================
   resume.js  –  Résumé / CV app
   ============================================================
   Links to hidden/cv_tech_en.pdf for PDF download.
   ============================================================ */

APP_REGISTRY.push({
  id: 'resume',
  title: 'Résumé',
  iconPath: 'icons/windows_vista/vista_book_1.ico',
  width: 560,
  height: 460,
  singleton: true,
  showOnDesktop: true,
  content: `
    <h1>Résumé — Daniel Salinas</h1>

    <h2>Education</h2>
    <div class="project-card">
      <div class="project-title"><img class="ico-md" src="icons/windows_vista/vista_book_1.ico"> Bachelor of Engineering in Software Engineering</div>
      <p class="card-meta">École de technologie supérieure (ÉTS), Montréal, QC · Since 2024 (Expected 2028)</p>
      <p>Software design, algorithms, data structures.</p>
    </div>
    <div class="project-card">
      <div class="project-title"><img class="ico-md" src="icons/windows_vista/vista_book_2.ico"> DEC in Computer Science</div>
      <p class="card-meta">Collège Lionel-Groulx, Sainte-Thérèse, QC · 2024</p>
      <p>Programming and software development.</p>
    </div>

    <h2>Work Experience</h2>
    <div class="project-card">
      <div class="project-title"><img class="ico-md" src="icons/windows_vista/vista_marketplace.ico"> Customer Service Clerk — Jean Coutu</div>
      <p class="card-meta">Montréal, QC · 2023 – 2024</p>
      <ul class="card-list">
        <li>Greeted and served customers professionally</li>
        <li>Processed cash register transactions with precision</li>
        <li>Ensured product shelving and organization</li>
        <li>Maintained store cleanliness and order</li>
      </ul>
      <p class="card-note">
        <strong>Skills developed:</strong> Customer communication, responsibility, time management, stress management.
      </p>
    </div>

    <h2>Additional Training</h2>
    <div class="project-card">
      <div class="project-title"><img class="ico-md" src="icons/windows_vista/vista_collab.ico"> Hackathon Participation — Android &amp; Web Development</div>
      <p class="card-meta">Technology events, Montréal, QC · 2024 – 2025</p>
      <ul class="card-list">
        <li>Designed and developed functional applications within a limited timeframe</li>
        <li>Worked in a multidisciplinary team under pressure</li>
        <li class="card-highlight"><img class="ico-sm" src="icons/windows_vista/vista_get_started.ico"> Achieved 3rd place in a university hackathon among several teams</li>
      </ul>
    </div>

    <div style="margin-top:16px">
      <a class="project-link-btn" href="cv_tech_en.pdf" download>Download PDF</a>
    </div>
  `
});
