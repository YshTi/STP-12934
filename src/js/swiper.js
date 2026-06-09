import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const feedbackSwiper = document.querySelector('[data-feedback-swiper]');

if (feedbackSwiper) {
  new Swiper('[data-feedback-swiper]', {
    modules: [Navigation, Pagination, Keyboard],

    slidesPerView: 1,
    spaceBetween: 16,

    allowTouchMove: true,
    simulateTouch: true,
    grabCursor: true,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    pagination: {
      el: '[data-feedback-pagination]',
      clickable: true,
    },

    navigation: {
      nextEl: '[data-feedback-next]',
      prevEl: '[data-feedback-prev]',
      disabledClass: 'swiper-feedback-button-disabled',
    },

    breakpoints: {
      1440: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
}
