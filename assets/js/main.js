// ===== HARDWORK — клиентские скрипты =====
// Мобильное меню: открытие/закрытие, aria-состояния, закрытие по Esc и клику вне.

(function () {
  'use strict';

  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  if (!burger || !nav) return;

  const setMenuState = (open) => {
    nav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  };

  burger.addEventListener('click', () => {
    setMenuState(!nav.classList.contains('open'));
  });

  // Закрытие по клику на ссылку внутри меню
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  // Закрытие по Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setMenuState(false);
      burger.focus();
    }
  });

  // Закрытие по клику вне меню
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !burger.contains(e.target)) {
      setMenuState(false);
    }
  });
})();
