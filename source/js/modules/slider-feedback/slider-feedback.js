import Swiper from '../../vendor/swiper';

export const initFeedbackSlider = () => {
  return new Swiper('[data-slider="feedback-slider"]', {

    loop: true,
    navigation: {
      prevEl: '[data-slider="feedback-slider-btn-prev"]',
      nextEl: '[data-slider="feedback-slider-btn-next"]',
    },

    breakpoints: {
      1200: {
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
};
