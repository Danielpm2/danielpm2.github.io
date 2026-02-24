/* ============================================================
   utils.js  –  Shared utility functions loaded first
   ============================================================ */

/**
 * Returns an <img> tag for an app with an iconPath,
 * or a <span> with the emoji fallback.
 *
 * @param {Object} appOrConfig  - object with iconPath and/or icon properties
 * @param {number} size         - pixel size (square)
 */
function iconHTML(appOrConfig, size = 32) {
  if (appOrConfig && appOrConfig.iconPath) {
    return `<img src="${appOrConfig.iconPath}" width="${size}" height="${size}" `
         + `alt="${appOrConfig.title || ''}" draggable="false" style="image-rendering:auto;display:block">`;
  }
  const emoji = (appOrConfig && appOrConfig.icon) ? appOrConfig.icon : '🗂️';
  return `<span style="font-size:${size}px;line-height:1">${emoji}</span>`;
}
