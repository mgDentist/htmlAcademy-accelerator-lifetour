import Swiper from '../../vendor/swiper';

// export const initAdvantagesSlider = () => {
//   let mySwiper = null;

//   const updateSlider = () => {
//     const desktop = window.matchMedia('(min-width: 1200px)');
//     const advSlider = document.querySelector('.advantages__slider');
//     const buttonNext = document.querySelector('.advantages__slider-button--next');
//     const buttonPrev = document.querySelector('.advantages__slider-button--prev');

//     if (desktop.matches) {
//       // Инициализируем Swiper, если его еще нет
//       if (!mySwiper) {
//         mySwiper = new Swiper(advSlider, {
//           navigation: {
//             nextEl: buttonNext,
//             prevEl: buttonPrev,
//           },
//           slidesPerView: 'auto',
//           centeredSlides: true,
//           loop: true,
//           initialSlide: 2,
//           spaceBetween: 30,
//         });
//       }
//     } else if (mySwiper) {
//       mySwiper.destroy(true, true);
//       mySwiper = null;
//     }
//   };

//   updateSlider();
//   window.addEventListener('resize', updateSlider);
// };


// export const advSlider = new Swiper('.advantages__slider', {
//   slidesPerView: 'auto',
//   centeredSlides: true,
//   initialSlide: 2,
//   spaceBetween: 30,
//   loop: true,
//   navigation: {
//     nextEl: '.advantages__slider-button--next',
//     prevEl: '.advantages__slider-button--prev',
//   },
// });

// export const advSlider = () => {
//   let desktop = window.matchMedia('(min-width: 1200px)');
//   let mySwiper;
//   if (desktop.matches && advSlider) {
//     // eslint-disable-next-line
//     mySwiper = new Swiper(advSlider, {
//       navigation: {
//         nextEl: '.advantages__slider-button--next',
//         prevEl: '.advantages__slider-button--prev',
//       },

//       slidesPerView: 'auto',
//       centeredSlides: true,
//       loop: true,
//       initialSlide: 2,
//       spaceBetween: 30,
//     });

//   } else {
//     mySwiper.destroy();
//   }
// };

export const initAdvantagesSlider = () => {
  let mySwiper = null;

  const createSlider = () => {
    mySwiper = new Swiper('.advantages__slider', {
      navigation: {
        nextEl: '.advantages__slider-button--next',
        prevEl: '.advantages__slider-button--prev',
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
    const desktop = window.matchMedia('(min-width: 1440px)');
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
