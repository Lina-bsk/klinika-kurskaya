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

$(document).ready(function(){
$('.owl-carousel').owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1200:{
            items:4
        }
    }
});

$(document).ready(function(){
  $(".form__phone").mask("+7 (999) 99-99-999");
});
