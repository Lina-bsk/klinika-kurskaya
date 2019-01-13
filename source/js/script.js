var btnMenu = document.querySelector('.header__nav-btn');


btnMenu.addEventListener('click', function() {
  if (btnMenu.classList.contains('header__nav-btn--open')) {
    btnMenu.classList.remove('header__nav-btn--open');
    btnMenu.classList.add('header__nav-btn--closed');
  } else {
    btnMenu.classList.add('header__nav-btn--open');
    btnMenu.classList.remove('header__nav-btn--closed');
  }
});
