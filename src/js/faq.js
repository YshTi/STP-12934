const faqItems = document.querySelectorAll('[data-item]');

const iconPlus = './img/sprite.svg#icon-plus';
const iconMinus = './img/sprite.svg#icon-minus';

const setFaqState = (item, isOpen) => {
  const button = item.querySelector('[data-button]');
  const icon = item.querySelector('[data-svg]');

  item.dataset.state = isOpen ? 'open' : 'closed';

  if (button) {
    button.setAttribute('aria-expanded', String(isOpen));
  }

  if (icon) {
    icon.setAttribute('href', isOpen ? iconMinus : iconPlus);
  }
};

faqItems.forEach((item, index) => {
  const button = item.querySelector('[data-button]');

  setFaqState(item, index === 0);

  button?.addEventListener('click', event => {
    event.preventDefault();

    const isOpen = item.dataset.state === 'open';

    faqItems.forEach(faqItem => {
      setFaqState(faqItem, false);
    });

    if (!isOpen) {
      setFaqState(item, true);
    }
  });
});

