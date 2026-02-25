/* ============================================================
   apps.js  –  App registry + desktop icon builder
   ============================================================
   HOW TO ADD A NEW APP:
   1. Add an entry to the APP_REGISTRY array below.
   2. Set showOnDesktop: true to put it on the desktop.
   3. The `content` field is plain HTML for the window body.
   4. Set `iconPath` to a relative path under icons/ for a real
      Vista icon, or set `icon` (emoji string) as a fallback.
   ============================================================ */

const APP_REGISTRY = [
  /* ── About Me ─────────────────────────────────────────── */
  {
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
            Hi! I'm a software engineering student at ÉTS Montréal with a strong passion for
            building clean, performant applications — from real-time web platforms to OpenGL
            graphics engines. I enjoy tackling complex problems and delivering polished results.
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
  },

  /* ── Projects ──────────────────────────────────────────── */
  {
    id: 'projects',
    title: 'Projects',
    iconPath: 'icons/windows_vista/vista_bench.ico',
    width: 660,
    height: 480,
    singleton: true,
    showOnDesktop: true,
    content: `
      <h1>Projects</h1>
      <p>Academic and personal projects I've built.</p>

      <h2>Academic Projects</h2>

      <div class="project-card">
        <div class="project-title"><img class="ico-md" src="icons/windows_vista/vista_xbox.ico"> Real-Time Online Chess Platform</div>
        <p class="card-meta">End-of-Session Project · 2025</p>
        <p>Designed and implemented a real-time multiplayer chess web application with a
           client–server architecture, data persistence, and WebSocket-based live gameplay.</p>
        <div class="project-tags">
          <span class="project-tag">JavaScript</span>
          <span class="project-tag">WebSockets</span>
          <span class="project-tag">Node.js</span>
          <span class="project-tag">MySQL</span>
        </div>
      </div>

      <div class="project-card">
        <div class="project-title"><img class="ico-md" src="icons/windows_vista/vista_firewall_1.ico"> Banking Application Testing &amp; Maintenance</div>
        <p class="card-meta">Java · 2025</p>
        <p>Analyzed an existing Java banking application to identify defects, designed and
           executed unit and functional tests, fixed anomalies and improved code maintainability
           using best practices for software testing.</p>
        <div class="project-tags">
          <span class="project-tag">Java</span>
          <span class="project-tag">JUnit</span>
          <span class="project-tag">TDD</span>
        </div>
      </div>

      <h2>Personal Projects</h2>

      <div class="project-card">
        <div class="project-title"><img class="ico-md" src="icons/windows_vista/vista_cal_1.ico"> Web Dashboard — Google Calendar API</div>
        <p class="card-meta">2024</p>
        <p>Designed a web dashboard to visualize and manage Google Calendar events,
           integrating the Google Calendar API for real-time data retrieval. Built with a clean
           separation of presentation and application logic.</p>
        <div class="project-tags">
          <span class="project-tag">HTML</span>
          <span class="project-tag">CSS</span>
          <span class="project-tag">JavaScript</span>
          <span class="project-tag">Google API</span>
        </div>
      </div>

      <div class="project-card">
        <div class="project-title"><img class="ico-md" src="icons/windows_vista/vista_perf_center.ico"> Mandelbrot Fractal Visualizer</div>
        <p class="card-meta">C++ / OpenGL · 2025</p>
        <p>Designed and developed a real-time graphics rendering engine in C++ with OpenGL,
           visualizing complex mathematical structures (Mandelbrot set) with optimized
           computation for smooth interactive rendering.</p>
        <div class="project-tags">
          <span class="project-tag">C++</span>
          <span class="project-tag">OpenGL</span>
          <span class="project-tag">Qt 6</span>
          <span class="project-tag">GLSL</span>
        </div>
      </div>
    `
  },

  /* ── Skills ─────────────────────────────────────────────── */
  {
    id: 'skills',
    title: 'Skills',
    iconPath: 'icons/windows_vista/vista_perf_center.ico',
    width: 520,
    height: 440,
    singleton: true,
    showOnDesktop: true,
    content: `
      <h1>Skills</h1>

      <h2>Programming Languages</h2>
      <div class="lang-grid">
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++">
          <span>C++</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java">
          <span>Java</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript">
          <span>JavaScript</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#">
          <span>C#</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP">
          <span>PHP</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg" alt="SQL">
          <span>SQL</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" alt="Kotlin">
          <span>Kotlin</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg" alt="Lua">
          <span>Lua</span>
        </div>
      </div>

      <h2>Technologies &amp; Environments</h2>
      <div class="lang-grid">
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opengl/opengl-original.svg" alt="OpenGL">
          <span>OpenGL</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg" alt="Qt 6">
          <span>Qt 6</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js">
          <span>Node.js</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express">
          <span>Express</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" alt="Socket.IO">
          <span>Socket.IO</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" alt="Android">
          <span>Android</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" alt="Unity">
          <span>Unity</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5">
          <span>HTML5</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3">
          <span>CSS3</span>
        </div>
      </div>

      <h2>Databases &amp; Tools</h2>
      <div class="lang-grid">
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL">
          <span>MySQL</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" alt="Firebase">
          <span>Firebase</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git">
          <span>Git</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub">
          <span>GitHub</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" alt="GitLab">
          <span>GitLab</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cmake/cmake-original.svg" alt="CMake">
          <span>CMake</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" alt="Maven">
          <span>Maven</span>
        </div>
        <div class="lang-chip">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code">
          <span>VS Code</span>
        </div>
      </div>

      <h2>Concepts &amp; Methodologies</h2>
      <div class="lang-grid">
        <div class="lang-chip">
          <img src="icons/windows_vista/vista_bench.ico" alt="OOP">
          <span>OOP</span>
        </div>
        <div class="lang-chip">
          <img src="icons/windows_vista/vista_sidebar_1.ico" alt="Design Patterns">
          <span>Design Patterns</span>
        </div>
        <div class="lang-chip">
          <img src="icons/windows_vista/vista_search_globe.ico" alt="REST APIs">
          <span>REST APIs</span>
        </div>
        <div class="lang-chip">
          <img src="icons/windows_vista/vista_netcenter.ico" alt="Client–Server">
          <span>Client–Server</span>
        </div>
        <div class="lang-chip">
          <img src="icons/windows_vista/vista_firewall_1.ico" alt="TDD">
          <span>TDD / Testing</span>
        </div>
        <div class="lang-chip">
          <img src="icons/windows_vista/vista_collab.ico" alt="Agile">
          <span>Agile / Scrum</span>
        </div>
        <div class="lang-chip">
          <img src="icons/windows_vista/vista_perf_center.ico" alt="DevOps">
          <span>DevOps / Kanban</span>
        </div>
        <div class="lang-chip">
          <img src="icons/windows_vista/vista_perf_center.ico" alt="Graphics">
          <span>Computer Graphics</span>
        </div>
      </div>
    `,
    onOpen: () => {}
  },

  /* ── Contact ─────────────────────────────────────────────── */
  {
    id: 'contact',
    title: 'Contact',
    iconPath: 'icons/windows_vista/vista_messenger.ico',
    width: 500,
    height: 440,
    singleton: true,
    showOnDesktop: true,
    content: `
      <h1>Get In Touch</h1>
      <p>I'm always open to new opportunities, collaborations, or just a friendly chat!</p>

      <div class="contact-links">
        <a class="contact-link" href="mailto:daniel.salinas-escoto.1@ens.etsmtl.ca">
          <span class="cl-icon"><img src="icons/windows_vista/vista_messenger.ico" width="22" height="22"></span> Email
        </a>
        <a class="contact-link" href="https://www.linkedin.com/in/daniel-salinas-escoto-67708b251/" target="_blank">
          <span class="cl-icon"><img src="icons/windows_vista/vista_collab.ico" width="22" height="22"></span> LinkedIn
        </a>
        <a class="contact-link" href="https://github.com/Danielpm2" target="_blank">
          <span class="cl-icon"><img src="icons/utilities/explorer.ico" width="22" height="22"></span> GitHub
        </a>
      </div>

      <div class="project-card" style="margin-top:16px">
        <div class="project-title"><img class="ico-md" src="icons/windows_vista/vista_sidebar_2.ico"> Phone</div>
        <p>514 692–9085</p>
      </div>
      <div class="project-card">
        <div class="project-title"><img class="ico-md" src="icons/windows_vista/vista_netcenter.ico"> Location</div>
        <p>Montréal, QC, Canada</p>
      </div>
    `,
    onOpen: (el) => {
      el.querySelector('#contact-form')?.addEventListener('submit', e => {
        e.preventDefault();
        showToast('Message sent! (demo mode — set up a backend to actually send it)');
        e.target.reset();
      });
    }
  },

  /* ── Welcome / Readme ────────────────────────────────────── */
  {
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
        <h1>Daniel Salinas — Portfolio</h1>
        <p>Software Engineering Student at ÉTS Montréal</p>
        <p style="margin-top:6px;font-size:12px;color:#7090b0">
          Double-click any icon on the desktop to explore.<br>
          Windows can be dragged, resized, minimized and maximized.
        </p>
      </div>
    `
  },

  /* ── Resume / CV ─────────────────────────────────────────── */
  {
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
        <a class="project-link-btn" href="resume.pdf" download>Download PDF</a>
      </div>
    `
  },
];

/* ============================================================
   Desktop Icon Builder
   ============================================================ */
function buildDesktopIcons() {
  const container = document.getElementById('desktop-icons');
  container.innerHTML = '';

  APP_REGISTRY.filter(a => a.showOnDesktop).forEach(app => {
    const icon = document.createElement('div');
    icon.className = 'desktop-icon';
    icon.dataset.appId = app.id;
    icon.innerHTML = `
      <div class="icon-img">${iconHTML(app, 48)}</div>
      <div class="icon-label">${app.title}</div>
    `;

    // Single click = select
    icon.addEventListener('click', e => {
      e.stopPropagation();
      document.querySelectorAll('.desktop-icon.selected').forEach(i => i.classList.remove('selected'));
      icon.classList.add('selected');
    });

    // Double click = open
    icon.addEventListener('dblclick', e => {
      e.stopPropagation();
      launchApp(app.id);
    });

    container.appendChild(icon);
  });

  // Add Recycle Bin (non-app, decorative)
  const bin = document.createElement('div');
  bin.className = 'desktop-icon';
  bin.innerHTML = `
    <div class="icon-img"><img src="icons/utilities/trashbin1.ico" width="48" height="48" alt="Recycle Bin" draggable="false"></div>
    <div class="icon-label">Recycle Bin</div>
  `;
  bin.addEventListener('click', e => {
    e.stopPropagation();
    document.querySelectorAll('.desktop-icon.selected').forEach(i => i.classList.remove('selected'));
    bin.classList.add('selected');
  });
  bin.addEventListener('dblclick', e => {
    e.stopPropagation();
    showToast('Recycle Bin is empty.');
  });
  container.appendChild(bin);
}

/* ============================================================
   Start Menu App List Builder
   ============================================================ */
function buildStartMenuApps() {
  const ul = document.getElementById('start-menu-apps');
  ul.innerHTML = '';
  APP_REGISTRY.forEach(app => {
    const li = document.createElement('li');
    li.className = 'sm-app-item';
    li.innerHTML = `<span class="sm-icon">${iconHTML(app, 24)}</span><span>${app.title}</span>`;
    li.addEventListener('click', () => {
      document.getElementById('start-menu').classList.add('hidden');
      launchApp(app.id);
    });
    ul.appendChild(li);
  });
}

/* ============================================================
   Launch App by ID
   ============================================================ */
function launchApp(id) {
  const app = APP_REGISTRY.find(a => a.id === id);
  if (!app) return;
  WindowManager.open(app);
}

/* ============================================================
   Toast Notification
   ============================================================ */
function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'os-toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3100);
}

// Expose globally
window.launchApp  = launchApp;
window.showToast  = showToast;
