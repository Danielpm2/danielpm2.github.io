/* ============================================================
   fs.js  –  Virtual File System
   ============================================================
   Simulates a Windows-style directory tree.

   Each node is either:
     { type: 'folder', name, children: [...] }
     { type: 'exe',    name, appId }          ← launches an app
     { type: 'img',    name, src }            ← opens in Photos
     { type: 'txt',    name, content }        ← reserved / future

   The Programs folder is auto-populated from APP_REGISTRY after
   all app scripts are loaded (call FS.init() in main.js).
   ============================================================ */

const FS = (() => {

  /* ── Tree ──────────────────────────────────────────────── */
  const tree = {
    type: 'folder',
    name: 'C:\\',
    children: [
      {
        type: 'folder',
        name: 'Programs',
        sidebarIcon: 'icons/utilities/explorer.ico',
        children: []   // populated by FS.init() from APP_REGISTRY
      },
      {
        type: 'folder',
        name: 'Photos',
        sidebarIcon: 'icons/windows_vista/vista_photo_gallery.ico',
        children: []   // populated by FS.init() by scanning known photo paths
      },
      {
        type: 'folder',
        name: 'Documents',
        sidebarIcon: 'icons/windows_vista/vista_book_2.ico',
        children: [
          {
            type: 'txt',
            name: 'README.txt',
            icon: 'icons/windows_vista/vista_sidebar_2.ico',
            content: 'Alr buddy this is still my computer don\'t go snooping around in here >:('
          }
        ]
      }
    ]
  };

  /* ── Photo manifest ─────────────────────────────────────
     Add entries here whenever you drop an image into photos/.
     The src is relative to the web root.
  ─────────────────────────────────────────────────────── */
  const PHOTO_MANIFEST = [
    // Example (uncomment and adjust when you add real photos):
    // { name: 'my-photo.jpg', src: 'photos/my-photo.jpg' },
  ];

  /* ── Helpers ────────────────────────────────────────────── */

  /** Find a folder node by path array, e.g. ['C:\\', 'Programs'] */
  function getFolder(pathParts) {
    let node = tree;
    for (const part of pathParts.slice(1)) {
      if (!node.children) return null;
      node = node.children.find(c => c.name === part && c.type === 'folder');
      if (!node) return null;
    }
    return node;
  }

  /** Return the children of a folder path */
  function listFolder(pathParts) {
    const folder = getFolder(pathParts);
    return folder ? folder.children : [];
  }

  /** Open a file-system node (called on double-click) */
  function openNode(node, folderPath) {
    if (node.type === 'folder') {
      launchApp('explorer', { path: [...folderPath, node.name] });
    } else if (node.type === 'exe') {
      launchApp(node.appId);
    } else if (node.type === 'img') {
      // Pass the image src + the sibling image list for prev/next
      const siblings = listFolder(folderPath)
        .filter(n => n.type === 'img')
        .map(n => ({ name: n.name, src: n.src }));
      launchApp('photos', { src: node.src, name: node.name, siblings });
    } else if (node.type === 'txt') {
      showToast(`📄 ${node.name}: ${node.content.slice(0, 80)}…`);
    }
  }

  /* ── Init ───────────────────────────────────────────────── */
  function init() {
    // Populate Programs: each app gets its own subfolder containing a .exe
    // Explorer itself is excluded — it IS the file browser, no need to list it.
    const programs = tree.children.find(c => c.name === 'Programs');
    programs.children = APP_REGISTRY
      .filter(a => a.showOnDesktop && a.id !== 'explorer')
      .map(a => ({
        type: 'folder',
        name: a.title,
        icon: null,          // null → fsNodeIconHTML will use the generic folder icon
        _appIcon: a.iconPath || null,   // kept for the .exe inside
        children: [
          {
            type: 'exe',
            name: a.title + '.exe',
            icon: a.iconPath || null,
            appId: a.id
          }
        ]
      }));

    // Populate Photos from manifest
    const photos = tree.children.find(c => c.name === 'Photos');
    photos.children = PHOTO_MANIFEST.map(p => ({
      type: 'img',
      name: p.name,
      icon: 'icons/windows_vista/vista_photo_gallery.ico',
      src: p.src
    }));
  }

  /* ── Public API ─────────────────────────────────────────── */
  return { tree, getFolder, listFolder, openNode, init };
})();

window.FS = FS;
