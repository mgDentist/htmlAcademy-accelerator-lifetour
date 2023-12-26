import Swiper from '../../vendor/swiper';

export const gallerySlider = new Swiper('.gallery__slider', {
  navigation: {
    nextEl: '.gallery__slider-button--next',
    prevEl: '.gallery__slider-button--prev',
  },
  // slidesPerView: 'auto',
  loop: true,

  breakpoints: {
    1440: {
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
