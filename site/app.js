(function () {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('nav-menu');
  const yearEl = document.getElementById('year');
  const themeToggle = document.querySelector('.theme-toggle');
  const root = document.documentElement;
  const THEME_KEY = 'theme';

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeToggle) {
      const isDark = theme === 'dark';
      themeToggle.textContent = isDark ? '☀️' : '🌙';
      themeToggle.setAttribute('aria-label', isDark ? 'Aktifkan tema terang' : 'Aktifkan tema gelap');
      themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    }
  }

  applyTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (menu.classList.contains('open')) {
          menu.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.setAttribute('aria-label', 'Buka menu navigasi');
        }
      });
    });
  }
})();

/* === Perbaikan tombol tema (manual) === */
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.theme-toggle, #theme-toggle, #themeToggle, [data-theme-toggle]');
  if (!btn) return;
  function apply(t) {
    root.setAttribute('data-theme', t);
    btn.textContent = t === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('aria-pressed', t === 'dark');
    btn.setAttribute('aria-label', t === 'dark' ? 'Ganti ke tema terang' : 'Ganti ke tema gelap');
    try { localStorage.setItem('theme', t); } catch (e) {}
  }
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  apply(saved === 'dark' ? 'dark' : 'light');
  btn.addEventListener('click', function (e) {
    e.stopImmediatePropagation();
    apply(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  }, true);
})();
