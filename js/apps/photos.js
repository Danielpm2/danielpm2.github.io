/* ============================================================
   photos.js  –  Photo Viewer app
   ============================================================
   Opened by FS.openNode() when a user double-clicks an image,
   or from the Start Menu Pictures shortcut.

   Args passed via launchApp('photos', args):
     args.src       – path to the image to show
     args.name      – file name (shown in title bar area)
     args.siblings  – array of { name, src } in the same folder
                      (enables prev/next navigation)

   If launched with no args, it opens the Photos folder in
   the File Explorer instead.
   ============================================================ */

function buildPhotosHTML(args) {
  if (!args || !args.src) {
    // No image selected — show a placeholder
    return `
      <div class="photos-empty">
        <img src="icons/windows_vista/vista_photo_gallery.ico" width="48" height="48" style="opacity:0.5">
        <p>No photo selected.</p>
        <p style="font-size:11px;color:#6080a0">Open a photo from the File Explorer.</p>
      </div>`;
  }

  const siblings = args.siblings || [{ name: args.name, src: args.src }];
  const currentIdx = siblings.findIndex(s => s.src === args.src);
  const hasMultiple = siblings.length > 1;

  const prevDisabled = currentIdx <= 0 ? 'disabled' : '';
  const nextDisabled = currentIdx >= siblings.length - 1 ? 'disabled' : '';

  return `
    <div class="photos-shell">
      <div class="photos-toolbar">
        <button class="photos-nav-btn" id="photos-prev" ${prevDisabled}
                data-siblings="${encodeURIComponent(JSON.stringify(siblings))}"
                data-index="${currentIdx}">&#8249;</button>
        <span class="photos-filename">${args.name}</span>
        <span class="photos-counter">${hasMultiple ? `${currentIdx + 1} / ${siblings.length}` : ''}</span>
        <button class="photos-nav-btn" id="photos-next" ${nextDisabled}
                data-siblings="${encodeURIComponent(JSON.stringify(siblings))}"
                data-index="${currentIdx}">&#8250;</button>
      </div>
      <div class="photos-viewer">
        <img src="${args.src}" alt="${args.name}" class="photos-img" draggable="false">
      </div>
    </div>`;
}

function photosOnOpen(winEl, args) {
  function navigate(delta) {
    const btn = winEl.querySelector('#photos-prev') || winEl.querySelector('#photos-next');
    if (!btn) return;
    const siblings = JSON.parse(decodeURIComponent(btn.dataset.siblings));
    const idx = parseInt(btn.dataset.index, 10) + delta;
    if (idx < 0 || idx >= siblings.length) return;
    const newArgs = { src: siblings[idx].src, name: siblings[idx].name, siblings };
    const content = winEl.querySelector('.app-content');
    if (content) content.innerHTML = buildPhotosHTML(newArgs);
    photosOnOpen(winEl, newArgs);
  }

  winEl.querySelector('#photos-prev')?.addEventListener('click', () => navigate(-1));
  winEl.querySelector('#photos-next')?.addEventListener('click', () => navigate(1));
}

APP_REGISTRY.push({
  id: 'photos',
  title: 'Photos',
  iconPath: 'icons/windows_vista/vista_photo_gallery.ico',
  width: 700,
  height: 520,
  singleton: false,
  showOnDesktop: false,   // accessed via explorer or start menu shortcut

  buildContent(args) {
    return buildPhotosHTML(args);
  },

  get content() {
    return buildPhotosHTML(null);
  },

  onOpen(winEl, args) {
    photosOnOpen(winEl, args || null);
  }
});
