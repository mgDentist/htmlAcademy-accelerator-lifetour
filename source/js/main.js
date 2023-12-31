import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';

import {menuOpener} from './modules/menu-toggle/menu-toggle';
import {videoStarter} from './modules/video-starter/video-starter';
import {initHeroSlider} from './modules/slider-hero/slider-hero';
import {initToursSlider} from './modules/slider-tours/slider-tours';
import {initTraningSlider} from './modules/slider-training/slider-training';
import {initFeedbackSlider} from './modules/slider-feedback/slider-feedback';
import {initAdvantagesSlider} from './modules/slider-advantages/slider-advantages';
import {initGallerySlider} from './modules/slider-gallery/slider-gallery';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  menuOpener();
  videoStarter();
  initHeroSlider();
  initToursSlider();
  initTraningSlider();
  initFeedbackSlider();
  initAdvantagesSlider();
  initGallerySlider();

  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
