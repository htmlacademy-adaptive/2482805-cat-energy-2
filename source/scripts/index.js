/* в этот файл добавляет скрипты*/

const menu = document.querySelector('.nav__list');
const hamburger = document.querySelector('.header__nav-toggle');

if (menu.classList.contains('nav__list--nojs') && hamburger.classList.contains('header__nav-toggle--nojs')) {
  menu.classList.remove('nav__list--nojs');
  hamburger.classList.remove('header__nav-toggle--nojs');
  hamburger.classList.add('header__nav-toggle--open');
}

hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains('header__nav-toggle--open')) {
    hamburger.classList.remove('header__nav-toggle--open');
    menu.classList.add('nav__list--opened');
    hamburger.classList.add('header__nav-toggle--close');
  } else {
    hamburger.classList.remove('header__nav-toggle--close');
    menu.classList.remove('nav__list--opened');
    hamburger.classList.add('header__nav-toggle--open');
  }
});
