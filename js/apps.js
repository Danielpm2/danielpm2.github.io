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
          <h1>Your Name</h1>
          <div class="tagline">Full-Stack Developer · Designer · Creator</div>
          <p style="margin-top:10px">
            Hi! I'm a passionate developer who loves building beautiful,
            performant web experiences. I specialize in modern JavaScript,
            clean architecture, and thoughtful UX.
          </p>
        </div>
      </div>
      <h2>A bit about me</h2>
      <p>
        I've been coding since [year] and have worked on everything from
        small personal projects to large-scale applications.
        I care deeply about the details — both in code and in design.
      </p>
      <p>
        When I'm not coding, you'll find me [hobby], [hobby], or exploring
        new technologies.
      </p>
      <h2>Quick Facts</h2>
      <div class="skills-grid" style="grid-template-columns:repeat(auto-fill,minmax(150px,1fr))">
        <div class="skill-chip">📍 Based in [City]</div>
        <div class="skill-chip">🎓 [Degree / Self-taught]</div>
        <div class="skill-chip">💼 Open to work</div>
        <div class="skill-chip">🌐 [Languages spoken]</div>
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
      <p>A selection of things I've built.</p>

      <div class="project-card">
        <div class="project-title">🚀 Project Alpha</div>
        <p>A full-stack web application with real-time features, built to solve [problem].</p>
        <div class="project-tags">
          <span class="project-tag">React</span>
          <span class="project-tag">Node.js</span>
          <span class="project-tag">PostgreSQL</span>
          <span class="project-tag">WebSockets</span>
        </div>
        <div class="project-links">
          <a class="project-link-btn" href="#" target="_blank">🔗 Live Demo</a>
          <a class="project-link-btn" href="#" target="_blank">⌨ Source</a>
        </div>
      </div>

      <div class="project-card">
        <div class="project-title">🎨 Project Beta</div>
        <p>An open-source design tool / component library / CLI that does [thing].</p>
        <div class="project-tags">
          <span class="project-tag">TypeScript</span>
          <span class="project-tag">CSS</span>
          <span class="project-tag">Vite</span>
        </div>
        <div class="project-links">
          <a class="project-link-btn" href="#" target="_blank">🔗 Live Demo</a>
          <a class="project-link-btn" href="#" target="_blank">⌨ Source</a>
        </div>
      </div>

      <div class="project-card">
        <div class="project-title">🛠️ Project Gamma</div>
        <p>A developer tool / mobile app / automation script that [description].</p>
        <div class="project-tags">
          <span class="project-tag">Python</span>
          <span class="project-tag">FastAPI</span>
          <span class="project-tag">Docker</span>
        </div>
        <div class="project-links">
          <a class="project-link-btn" href="#" target="_blank">🔗 Live Demo</a>
          <a class="project-link-btn" href="#" target="_blank">⌨ Source</a>
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

      <h2>Languages & Frameworks</h2>
      <div class="skill-row"><div class="skill-row-label"><span>JavaScript / TypeScript</span><span>95%</span></div>
        <div class="skill-bar"><div class="skill-bar-fill" style="width:0" data-width="95"></div></div></div>
      <div class="skill-row"><div class="skill-row-label"><span>HTML & CSS</span><span>95%</span></div>
        <div class="skill-bar"><div class="skill-bar-fill" style="width:0" data-width="95"></div></div></div>
      <div class="skill-row"><div class="skill-row-label"><span>React / Vue / Svelte</span><span>85%</span></div>
        <div class="skill-bar"><div class="skill-bar-fill" style="width:0" data-width="85"></div></div></div>
      <div class="skill-row"><div class="skill-row-label"><span>Node.js / Python</span><span>80%</span></div>
        <div class="skill-bar"><div class="skill-bar-fill" style="width:0" data-width="80"></div></div></div>
      <div class="skill-row"><div class="skill-row-label"><span>SQL / NoSQL</span><span>75%</span></div>
        <div class="skill-bar"><div class="skill-bar-fill" style="width:0" data-width="75"></div></div></div>

      <h2>Tools & Practices</h2>
      <div class="skills-grid">
        <div class="skill-chip">Git / GitHub</div>
        <div class="skill-chip">Docker</div>
        <div class="skill-chip">CI / CD</div>
        <div class="skill-chip">REST & GraphQL</div>
        <div class="skill-chip">TDD / Testing</div>
        <div class="skill-chip">Figma</div>
        <div class="skill-chip">Linux</div>
        <div class="skill-chip">Agile / Scrum</div>
      </div>
    `,
    onOpen: (el) => {
      // Animate skill bars when the window opens
      requestAnimationFrame(() => {
        el.querySelectorAll('.skill-bar-fill[data-width]').forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });
      });
    }
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
        <a class="contact-link" href="mailto:you@example.com">
          <span class="cl-icon">📧</span> Email
        </a>
        <a class="contact-link" href="https://github.com/yourhandle" target="_blank">
          <span class="cl-icon">🐙</span> GitHub
        </a>
        <a class="contact-link" href="https://linkedin.com/in/yourhandle" target="_blank">
          <span class="cl-icon">💼</span> LinkedIn
        </a>
        <a class="contact-link" href="https://twitter.com/yourhandle" target="_blank">
          <span class="cl-icon">🐦</span> Twitter / X
        </a>
      </div>

      <h2 style="margin-top:16px">Send a Message</h2>
      <form class="contact-form" id="contact-form">
        <div>
          <label>Name</label>
          <input type="text" placeholder="Your name" required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" placeholder="your@email.com" required />
        </div>
        <div>
          <label>Message</label>
          <textarea rows="4" placeholder="What's on your mind?" required></textarea>
        </div>
        <button type="submit">Send Message ✈️</button>
      </form>
    `,
    onOpen: (el) => {
      el.querySelector('#contact-form')?.addEventListener('submit', e => {
        e.preventDefault();
        showToast('✈️ Message sent! (demo mode — set up a backend to actually send it)');
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
        <h1>Welcome to My Portfolio</h1>
        <p>Double-click any icon on the desktop to explore.</p>
        <p style="margin-top:4px;font-size:11px;color:#607890">
          Tip: windows can be dragged, resized, minimized and maximized.
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
      <h1>Résumé</h1>

      <h2>Experience</h2>
      <div class="project-card">
        <div class="project-title">🏢 Company Name — Role</div>
        <p>Month Year – Present</p>
        <p>Description of responsibilities and accomplishments at this role.</p>
      </div>
      <div class="project-card">
        <div class="project-title">🏢 Previous Company — Role</div>
        <p>Month Year – Month Year</p>
        <p>Description of responsibilities and accomplishments at this role.</p>
      </div>

      <h2>Education</h2>
      <div class="project-card">
        <div class="project-title">🎓 University / Institution</div>
        <p>Degree · Year – Year</p>
      </div>

      <div style="margin-top:16px">
        <a class="project-link-btn" href="resume.pdf" download>⬇️ Download PDF</a>
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
    showToast('🗑️ Recycle Bin is empty.');
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
