/**
 * forecast_style_switcher.js
 * Gestiona el cambio entre forecast_aampe.css ↔ forecast_claude.css
 * y el toggle dark/light. Mismo patrón que bu_style_switcher.js.
 *
 * Incluir ANTES del </body> en sales_forecast_dashboard.html.
 * Los botones se inyectan automáticamente junto a #theme-btn.
 * window.reinitCharts() se llama tras cada cambio si hay datos cargados.
 */
(function () {
  const STYLE_KEY = 'forecast-style';
  const THEME_KEY = 'forecast-theme';
  const SHEETS = {
    aampe:  'forecast_aampe.css',
    claude: 'forecast_claude.css',
  };

  function getLink()  { return document.getElementById('app-theme-css'); }
  function getStyle() { return localStorage.getItem(STYLE_KEY) || 'aampe'; }
  function getTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyStyle(style) {
    const link = getLink();
    if (link) {
      link.href = SHEETS[style] || SHEETS.aampe;
      // Esperar a que el nuevo CSS cargue antes de redibujar charts
      link.addEventListener('load', function onLoad() {
        link.removeEventListener('load', onLoad);
        if (typeof window.reinitCharts === 'function') {
          requestAnimationFrame(window.reinitCharts);
        }
      });
    }
    localStorage.setItem(STYLE_KEY, style);
    updateStyleBtn(style);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateThemeBtn(theme);
    requestAnimationFrame(() => {
      if (typeof window.reinitCharts === 'function') window.reinitCharts();
    });
  }

  function updateStyleBtn(style) {
    const btn = document.getElementById('style-switcher-btn');
    if (!btn) return;
    const isAampe = style === 'aampe';
    btn.title = isAampe ? 'Cambiar a tema Claude (teal)' : 'Cambiar a tema Aampe (naranja)';
    btn.style.borderColor = isAampe ? 'var(--border2)' : 'var(--primary)';
    btn.style.color       = isAampe ? 'var(--muted)'   : 'var(--primary)';
    btn.innerHTML = isAampe
      ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
           <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/>
           <line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/>
           <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
         </svg>`
      : `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
           <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 0 1 0-16z"/>
         </svg>`;
  }

  function updateThemeBtn(theme) {
    const btn = document.getElementById('theme-btn');
    if (!btn) return;
    const isDark = theme === 'dark';
    btn.title = isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    btn.innerHTML = isDark
      ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
           <circle cx="12" cy="12" r="4"/>
           <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
         </svg>`
      : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
           <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
         </svg>`;
  }

  function injectBtns() {
    const anchor = document.getElementById('theme-btn');
    if (!anchor) return;

    // Conectar el theme-btn al handler
    anchor.onclick = () => applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
    updateThemeBtn(getTheme());

    // Inyectar style-switcher-btn si no existe
    if (!document.getElementById('style-switcher-btn')) {
      const btn = document.createElement('button');
      btn.id        = 'style-switcher-btn';
      btn.className = 'hbtn';
      btn.setAttribute('aria-label', 'Cambiar tema visual');
      btn.onclick   = () => applyStyle(getStyle() === 'aampe' ? 'claude' : 'aampe');
      anchor.insertAdjacentElement('beforebegin', btn);
      updateStyleBtn(getStyle());
    }
  }

  // Aplicar antes del primer paint (ya ejecutado por el script inline en <head>)
  // Aquí solo reconfiguramos los estados de los botones una vez el DOM está listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectBtns);
  } else {
    injectBtns();
  }
})();
