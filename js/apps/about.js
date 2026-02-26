/* ============================================================
   about.js  –  "About Me" app
   ============================================================ */

APP_REGISTRY.push({
  id: 'about',
  title: 'About Me',
  iconPath: 'icons/windows_vista/vista_info.ico',
  width: 580,
  height: 400,
  singleton: true,
  showOnDesktop: true,
  desktopRow: 0,
  content: `
    <div class="about-header">
      <div class="about-avatar">
        <img src="icons/windows_vista/vista_personalization.ico" width="64" height="64" alt="Avatar" draggable="false">
      </div>
      <div class="about-intro">
        <h1>Daniel Salinas</h1>
        <div class="tagline">Software Engineering Student · Full-Stack Developer · Graphics Enthusiast</div>
        <p style="margin-top:10px">
        Hi! I am a software engineering student based in Montréal. I have a passion for building
        software and exploring the world of programming and algorithms.
        I enjoy working on both web and desktop applications, and I'm always 
        eager to learn new technologies and take on new challenges.
        </p>
      </div>
    </div>
    <h2>Quick Facts</h2>
    <div class="skills-grid" style="grid-template-columns:repeat(auto-fill,minmax(160px,1fr))">
      <div class="skill-chip"><img class="ico" src="icons/windows_vista/vista_netcenter.ico"> Montréal, QC</div>
      <div class="skill-chip"><img class="ico" src="icons/windows_vista/vista_book_1.ico"> B.Eng. Software Eng.</div>
      <div class="skill-chip"><img class="ico" src="icons/windows_vista/vista_collab.ico"> Hackathon 3rd Place</div>
      <div class="skill-chip"><img class="ico" src="icons/windows_vista/vista_search_globe.ico"> FR · EN · ES</div>
      <div class="skill-chip"><img class="ico" src="icons/windows_vista/vista_sidebar_1.ico"> Conjure Club Member</div>
      <div class="skill-chip"><img class="ico" src="icons/windows_vista/vista_marketplace.ico"> Open to opportunities</div>
    </div>
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
  `
});
