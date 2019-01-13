var menu = document.querySelector('.header__nav');
var btnMenu = document.querySelector('.header__nav-btn');


btnMenu.addEventListener('click', function() {
  if (menu.classList.contains('header__nav--closed')) {
    menu.classList.remove('header__nav--closed');
    menu.classList.add('header__nav--opened');
    btnMenu.classList.add('header__nav-btn--open');
  } else {
    menu.classList.add('header__nav--closed');
    menu.classList.remove('header__nav--opened');
    btnMenu.classList.add('header__nav-btn--close');
  }
});
