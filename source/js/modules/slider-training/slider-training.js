import Swiper from '../../vendor/swiper';

export const traningSlider = new Swiper('.training__slider', {
  navigation: {
    nextEl: '.training__slider-button--next',
    prevEl: '.training__slider-button--prev',
  },

  breakpoints: {
    1440: {
      initialSlide: 0,
      slidesPerView: 4,
      spaceBetween: 20,
    },

    768: {
      initialSlide: 0,
      slidesPerView: 3,
      spaceBetween: 20,
    },

    320: {
      initialSlide: 0,
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
