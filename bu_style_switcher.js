/**
 * bu_style_switcher.js — Switch entre bu_aampe.css y bu_claude.css
 * Mismo patrón que style-switcher.js de SOLO Admin.
 * Incluir ANTES del </body> en bu_dashboard_v2.html.
 * El botón se inyecta automáticamente junto al theme-toggle.
 */
(function () {
  const STORAGE_KEY = 'bu-analytics-style';
  const SHEETS = {
    aampe:  'bu_aampe.css',
    claude: 'bu_claude.css',
  };

  function getLink() {
    return document.getElementById('app-theme-css');
  }

  function getStyle() {
    return localStorage.getItem(STORAGE_KEY) || 'aampe';
  }

  function applyStyle(style) {
    const link = getLink();
    if (link) link.href = SHEETS[style] || SHEETS.aampe;
    localStorage.setItem(STORAGE_KEY, style);
    updateBtn(style);
  }

  function updateBtn(style) {
    const btn = document.getElementById('style-switcher-btn');
    if (!btn) return;
    const isAampe = style === 'aampe';
    btn.title = isAampe ? 'Cambiar a tema Claude (verde)' : 'Cambiar a tema Aampe (naranja)';
    btn.innerHTML = isAampe
      ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
           <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
         </svg>`
      : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
           <circle cx="12" cy="12" r="3"/>
           <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
         </svg>`;
    btn.style.borderColor = isAampe ? 'var(--border2)' : 'var(--orange)';
    btn.style.color       = isAampe ? 'var(--muted)'   : 'var(--orange)';
  }

  function injectBtn() {
    const anchor = document.getElementById('theme-btn');
    if (!anchor) return;

    const btn = document.createElement('button');
    btn.id = 'style-switcher-btn';
    btn.className = 'hbtn ico';
    btn.setAttribute('aria-label', 'Cambiar tema visual');
    btn.onclick = () => applyStyle(getStyle() === 'aampe' ? 'claude' : 'aampe');
    anchor.parentNode.insertBefore(btn, anchor);
  }

  // Aplica estilo guardado antes del primer paint
  applyStyle(getStyle());

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectBtn);
  } else {
    injectBtn();
  }
})();
