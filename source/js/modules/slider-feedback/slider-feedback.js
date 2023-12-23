import Swiper from '../../vendor/swiper';

export const feedbackSlider = new Swiper('.feedback__slider', {

  loop: true,
  navigation: {
    nextEl: '.feedback__slider-button--next',
    prevEl: '.feedback__slider-button--prev',
  },

  breakpoints: {
    1440: {
      initialSlide: 0,
      spaceBetween: 120,
      slidesPerView: 'auto',
    },

    768: {
      initialSlide: 0,
      spaceBetween: 36,
      slidesPerView: 'auto',
    },

    350: {
      initialSlide: 0,
      slidesPerView: 1,
      spaceBetween: 100,
    },
  },
});
