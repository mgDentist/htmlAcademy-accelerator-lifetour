import Swiper from '../../vendor/swiper';

export const heroSlider = new Swiper('.hero__slider', {
  initialSlide: 0,
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
