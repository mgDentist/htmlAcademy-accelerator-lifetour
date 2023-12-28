import Swiper from '../../vendor/swiper';

export const initHeroSlider = () => new Swiper('[data-slider="hero-slider"]', {
  initialSlide: 0,
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '[data-slider="hero-slider-pgn"]',
    clickable: true,
  },
});
