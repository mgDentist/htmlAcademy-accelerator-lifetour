const WHITE = '#ffffff';
const BLACK = '#2d383f';

export const menuOpener = () => {

  const menuToggleButton = document.querySelector('[data-button="menu-toggle"]');
  const headerInnerContainer = document.querySelector('[data-header="header-inner-container"]');
  const headerRightWrapper = document.querySelector('[data="header-right-wrapper"]');
  const headerTel = document.querySelector('[data-header="header-tel"]');
  const headerLogo = document.querySelector('[data-header="header-logo"] svg');
  const headerNav = document.querySelector('[data-nav="header-nav"]');
  const navLinks = document.querySelectorAll('[data-nav="nav-list-link"]');
  const body = document.body;
  const overlay = document.querySelector('[data-burger="overlay"]');

  headerLogo.setAttribute('color', `${WHITE}`);

  const closeMenu = () => {
    headerInnerContainer.classList.remove('header__inner-container--mobile-menu-opened');
    headerTel.classList.remove('header__tel--mobile-menu-opened');
    menuToggleButton.classList.remove('header__button--mobile-menu-opened');
    headerLogo.classList.remove('header__logo--mobile-menu-opened');
    headerNav.classList.remove('header__nav--mobile-menu-opened');
    headerRightWrapper.classList.remove('header__right-wrapper--mobile-menu-opened');
    body.style.overflow = '';
    overlay.classList.remove('is-active');
    headerLogo.setAttribute('color', `${WHITE}`);
  };

  const openMenu = () => {
    headerInnerContainer.classList.add('header__inner-container--mobile-menu-opened');
    headerTel.classList.add('header__tel--mobile-menu-opened');
    menuToggleButton.classList.add('header__button--mobile-menu-opened');
    headerLogo.classList.add('header__logo--mobile-menu-opened');
    headerNav.classList.add('header__nav--mobile-menu-opened');
    headerRightWrapper.classList.add('header__right-wrapper--mobile-menu-opened');
    body.style.overflow = 'hidden';
    overlay.classList.add('is-active');
    headerLogo.setAttribute('color', `${BLACK}`);
  };

  menuToggleButton.addEventListener('click', () => {
    if (!headerInnerContainer.classList.contains('header__inner-container--mobile-menu-opened')) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
};
