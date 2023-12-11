export const menuOpener = () => {
  const menuToggleButton = document.querySelector('[data-button="menu-toggle"]');
  // const headerNav = document.querySelector('[data-nav="header-nav"]');
  const headerInnerContainer = document.querySelector('.header__inner-container');
  const headerRightWrapper = document.querySelector('.header__right-wrapper');
  const headerTel = document.querySelector('.header__tel');
  const headerLogo = document.querySelector('.header__logo');
  const headerNav = document.querySelector('.header__nav');


  menuToggleButton.addEventListener('click', () => {
    if (!headerInnerContainer.classList.contains('header__inner-container--mobile-menu-opened')) {
      headerInnerContainer.classList.add('header__inner-container--mobile-menu-opened');
      headerTel.classList.add('header__tel--mobile-menu-opened');
      menuToggleButton.classList.add('header__button--mobile-menu-opened');
      headerLogo.classList.add('header__logo--mobile-menu-opened');
      headerNav.classList.add('header__nav--mobile-menu-opened');
      headerRightWrapper.classList.add('header__right-wrapper--mobile-menu-opened');

    } else {
      headerInnerContainer.classList.remove('header__inner-container--mobile-menu-opened');
      headerTel.classList.remove('header__tel--mobile-menu-opened');
      menuToggleButton.classList.remove('header__button--mobile-menu-opened');
      headerLogo.classList.remove('header__logo--mobile-menu-opened');
      headerNav.classList.remove('header__nav--mobile-menu-opened');
      headerRightWrapper.classList.remove('header__right-wrapper--mobile-menu-opened');
    }
  });
};
