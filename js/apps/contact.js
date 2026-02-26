/* ============================================================
   contact.js  –  Contact app
   ============================================================ */

APP_REGISTRY.push({
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
});
