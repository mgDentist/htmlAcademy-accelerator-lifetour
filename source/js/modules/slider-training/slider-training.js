import Swiper from '../../vendor/swiper';

export const initTraningSlider = () => {
  return new Swiper('[data-slider="training-slider"]', {
    navigation: {
      prevEl: '[data-slider="training-slider-button-prev"]',
      nextEl: '[data-slider="training-slider-button-next"]',
    },

    breakpoints: {
      1200: {
        initialSlide: 7,
        slidesPerView: 4,
        spaceBetween: 20,
      },

      768: {
        initialSlide: 4,
        slidesPerView: 3,
        spaceBetween: 20,
      },

      320: {
        initialSlide: 2,
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });
};
