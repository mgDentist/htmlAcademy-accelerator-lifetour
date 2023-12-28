import Swiper from '../../vendor/swiper';

export const initAdvantagesSlider = () => {
  let mySwiper = null;

  const createSlider = () => {
    mySwiper = new Swiper('[data-slider="adv-slider"]', {
      navigation: {
        nextEl: '[data-slider="adv-slider-btn-prev"]',
        prevEl: '[data-slider="adv-slider-btn-next"]',
      },
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      initialSlide: 2,
      spaceBetween: 30,
    });
  };

  const destroySlider = () => {
    if (mySwiper !== null) {
      mySwiper.destroy(true, true);
      mySwiper = null;
    }
  };

  const checkSlider = () => {
    const desktop = window.matchMedia('(min-width: 1200px)');
    if (desktop.matches) {
      if (mySwiper === null) {
        createSlider();
      }
    } else {
      destroySlider();
    }
  };

  checkSlider();
  window.addEventListener('resize', checkSlider);
};
