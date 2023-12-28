import Swiper from '../../vendor/swiper';

export const initGallerySlider = () => {
  return new Swiper('[data-slider="gallery-slider"]', {
    navigation: {
      prevEl: '[data-slider="gallery-slider-btn-prev"]',
      nextEl: '[data-slider="gallery-slider-btn-next"]',
    },
    // slidesPerView: 'auto',
    loop: true,

    breakpoints: {
      1200: {
        initialSlide: 0,
        slidesPerView: 5,
        spaceBetween: 5,
      },

      768: {
        initialSlide: 0,
        slidesPerView: 3,
        spaceBetween: 4.5,
      },

      320: {
        initialSlide: 0,
        slidesPerView: 2,
        spaceBetween: 2,
      },
    },
  });
};
