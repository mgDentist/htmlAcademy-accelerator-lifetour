import Swiper from '../../vendor/swiper';

export const initToursSlider = () => new Swiper('[data-slider="tours-slider"]', {
  navigation: {
    prevEl: '[data-slider="tours-slider-btn-prev"]',
    nextEl: '[data-slider="tours-slider-btn-next"]',
  },

  breakpoints: {
    1200: {
      initialSlide: 5,
      slidesPerView: 3,
      spaceBetween: 30,
    },

    768: {
      initialSlide: 3,
      slidesPerView: 2,
      spaceBetween: 18,
    },

    320: {
      initialSlide: 3,
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
