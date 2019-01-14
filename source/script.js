var btnMenu = document.querySelector('.header__nav-btn');
var btnPrice = document.querySelector('.pricelist__btn');

btnMenu.addEventListener('click', function() {
  if (btnMenu.classList.contains('header__nav-btn--open')) {
    btnMenu.classList.remove('header__nav-btn--open');
    btnMenu.classList.add('header__nav-btn--closed');
  } else {
    btnMenu.classList.add('header__nav-btn--open');
    btnMenu.classList.remove('header__nav-btn--closed');
  }
});

btnPrice.addEventListener('click', function() {
  if (btnPrice.classList.contains('pricelist__btn--open')) {
    btnPrice.classList.remove('pricelist__btn--open');
    btnPrice.classList.add('pricelist__btn--closed');
  } else {
    btnPrice.classList.add('pricelist__btn--open');
    btnPrice.classList.remove('pricelist__btn--closed');
  }
});
