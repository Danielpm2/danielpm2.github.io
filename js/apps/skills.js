/* ============================================================
   skills.js  –  Skills app
   ============================================================
   Displays language logo cards (via Devicon CDN) for all skill
   categories: Languages, Technologies, Databases, Methodologies.
   ============================================================ */

APP_REGISTRY.push({
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
});
