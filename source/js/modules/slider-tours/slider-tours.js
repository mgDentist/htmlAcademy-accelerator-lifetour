import Swiper from '../../vendor/swiper';

export const toursSlider = new Swiper('.tours__slider', {
  navigation: {
    nextEl: '.tours__slider-button--next',
    prevEl: '.tours__slider-button--prev',
  },

  breakpoints: {
    1440: {
      initialSlide: 5,
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1024: {
      initialSlide: 3,
      slidesPerView: 2,
      spaceBetween: 18,
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
