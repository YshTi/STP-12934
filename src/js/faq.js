const faqItems = document.querySelectorAll('[data-item]');

const getSpritePath = useElement => {
  const currentHref = useElement.getAttribute('href');

  return currentHref.split('#')[0];
};

const setFaqState = (item, isOpen) => {
  const button = item.querySelector('[data-button]');
  const icon = item.querySelector('[data-svg]');

  item.dataset.state = isOpen ? 'open' : 'closed';

  if (button) {
    button.setAttribute('aria-expanded', String(isOpen));
  }

  if (icon) {
    const spritePath = getSpritePath(icon);
    const iconName = isOpen ? 'icon-minus' : 'icon-plus';

    icon.setAttribute('href', `${spritePath}#${iconName}`);
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
