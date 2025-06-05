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


document.addEventListener('DOMContentLoaded', () => {

  const ymaps = window.ymaps;
  ymaps.ready(() => {
    const myMap = new ymaps.Map('map', {
      center: [59.938679, 30.3230044],
      zoom: 14,
      controls: []
    });

    const screenWidth = window.innerWidth;

    let iconSize;
    let IconOffset = [-25, -43];

    if (screenWidth >= 768 && screenWidth < 1440) {
      iconSize = [113, 106];
      IconOffset = [-50, -57];
    } else if (screenWidth >= 1440) {
      iconSize = [113, 106];
      IconOffset = [190, -68];
    } else {
      iconSize = [57, 53];
    }

    const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
      iconLayout: 'default#image',
      iconImageHref: 'images/map-pin.png',
      iconImageSize: iconSize,
      iconImageOffset: IconOffset
    });

    myMap.geoObjects.add(myPlacemark);
  });
});
