const menuOpenBtn = document.querySelector('[data-menu-open]');
const menuCloseBtn = document.querySelector('[data-menu-close]');
const menuBackdrop = document.querySelector('[data-menu-backdrop]');

openBtn.addEventListener('click', e => {
  e.preventDefault();
  menu.dataset.visible = 'open';
  document.body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', e => {
  e.preventDefault();
  menu.dataset.visible = 'close';
  document.body.classList.remove('no-scroll');
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuBackdrop?.dataset.visible === 'open') {
    closeMenu();
  }
});