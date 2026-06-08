const menuOpenBtn = document.querySelector('[data-menu-open]');
const menuCloseBtn = document.querySelector('[data-menu-close]');
const menuBackdrop = document.querySelector('[data-menu-backdrop]');

let savedScrollY = 0;

const lockPageScroll = () => {
  savedScrollY = window.scrollY;

  document.body.dataset.scrollLock = 'true';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${savedScrollY}px`;
  document.body.style.left = '0';
  document.body.style.width = '100%';
};

const unlockPageScroll = () => {
  document.body.dataset.scrollLock = 'false';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.width = '';

  window.scrollTo(0, savedScrollY);
};

const openMenu = event => {
  event.preventDefault();

  menuBackdrop.dataset.visible = 'open';
  menuOpenBtn.setAttribute('aria-expanded', 'true');

  lockPageScroll();
};

const closeMenu = event => {
  if (event) {
    event.preventDefault();
  }

  menuBackdrop.dataset.visible = 'close';
  menuOpenBtn.setAttribute('aria-expanded', 'false');

  unlockPageScroll();
};

menuOpenBtn?.addEventListener('click', openMenu);
menuCloseBtn?.addEventListener('click', closeMenu);

menuBackdrop?.addEventListener('click', event => {
  if (event.target === menuBackdrop) {
    closeMenu();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuBackdrop?.dataset.visible === 'open') {
    closeMenu();
  }
});
