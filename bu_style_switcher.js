/**
 * bu_style_switcher.js (v3) · Cambia entre bu_aampe.css y bu_claude.css
 * - Las dos hojas están en el HTML; se activa una con el atributo media (cambio instantáneo, sin parpadeo).
 * - Se carga en <head>, justo después de los <link>, para aplicar el estilo guardado antes del primer pintado.
 * - Avisa con el evento "bu:stylechange" para que los gráficos se redibujen.
 * - Compatible con v2: si solo existe <link id="app-theme-css">, cambia su href.
 */
(function () {
  var KEY = 'bu-analytics-style';
  var SHEETS = { aampe: 'bu_aampe.css', claude: 'bu_claude.css' };
  var L = { aampe: document.getElementById('theme-aampe'), claude: document.getElementById('theme-claude') };
  var legacy = document.getElementById('app-theme-css');

  function getStyle() { try { return localStorage.getItem(KEY) || 'aampe'; } catch (e) { return 'aampe'; } }

  function updateBtn(style) {
    var btn = document.getElementById('style-switcher-btn');
    if (!btn) return;
    var isAampe = style === 'aampe';
    btn.title = isAampe ? 'Cambiar a tema Claude (verde)' : 'Cambiar a tema Aampe (naranja)';
    btn.setAttribute('aria-label', btn.title);
    btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/>' +
      '<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.7 1.5-1.5 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.8.7-1.5 1.5-1.5H16c3.3 0 6-2.7 6-6 0-4.9-4.5-9-10-9z"/></svg>';
    btn.style.borderColor = isAampe ? '' : 'var(--accent)';
    btn.style.color = isAampe ? '' : 'var(--accent-text, var(--accent))';
  }

  function applyStyle(style, silent) {
    if (!SHEETS[style]) style = 'aampe';
    if (L.aampe && L.claude) {
      L.aampe.media = style === 'claude' ? 'not all' : 'all';
      L.claude.media = style === 'claude' ? 'all' : 'not all';
    } else if (legacy) { legacy.href = SHEETS[style]; }
    try { localStorage.setItem(KEY, style); } catch (e) { /* sin almacenamiento */ }
    updateBtn(style);
    if (silent) return;
    var active = L[style];
    var fire = function () { window.dispatchEvent(new CustomEvent('bu:stylechange', { detail: style })); };
    fire();
    if (active && !active.sheet) active.addEventListener('load', fire, { once: true });   // primera carga de la hoja
  }

  function injectBtn() {
    var anchor = document.getElementById('theme-btn');
    if (!anchor || document.getElementById('style-switcher-btn')) return;
    var btn = document.createElement('button');
    btn.id = 'style-switcher-btn'; btn.type = 'button'; btn.className = 'hbtn ico';
    btn.onclick = function () { applyStyle(getStyle() === 'aampe' ? 'claude' : 'aampe'); };
    anchor.parentNode.insertBefore(btn, anchor);
    updateBtn(getStyle());
  }

  applyStyle(getStyle(), true);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', injectBtn); else injectBtn();
})();
