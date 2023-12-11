import Swiper from '../../vendor/swiper';

export const heroSlider = new Swiper('.hero__slider', {
  initialSlide: 0,
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    afterInit(swiper) {
      // Проверка на существование элемента пагинации
      if (swiper.pagination.el) {
        swiper.pagination.el.style.right = '10px';
        swiper.pagination.el.style.left = 'auto';
        swiper.pagination.el.style.bottom = '10px'; // Пример для сдвига пагинации вниз
      }
    },
  },
});
