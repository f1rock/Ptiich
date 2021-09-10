

//  hamburger menu
var circle = document.querySelector('.material-btn');
var link = document.querySelector('.material-content').querySelectorAll('li');
var ham = document.querySelector('.material-hamburger');
var main = document.querySelector('main');
var win = window;

function openMenu(event) {
 
  circle.classList.toggle('active');
  ham.classList.toggle('material-close');
  main.classList.toggle('active');
  for (var i = 0; i < link.length; i++) {
    link[i].classList.toggle('active');
  }
  event.preventDefault();
  event.stopImmediatePropagation();
}

function closeMenu() {
  if (circle.classList.contains('active')) {
    circle.classList.remove('active');
    for (var i = 0; i < link.length; i++) {
      link[i].classList.toggle('active');
    }
    ham.classList.remove('material-close');
    main.classList.remove('active');
  }
}

circle.addEventListener('click', openMenu, false);

win.addEventListener('click', closeMenu, false);


// accordion

const accordions = document.querySelectorAll('.accordion__item')

for (item of accordions) {
    item.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            for (el of accordions) {
                // el.classList.remove('active');
            }
            this.classList.add('active');
        }
    })
}

// слайдер slick
$('#slider_320').on('init reInit',function(event,slick){
  var amount = slick.slideCount;
  $('#range').attr('max',amount);
})

$('#slider_320').on('afterChange',function(e,slick,currentSlide){
  $('#range').val(currentSlide+1);
})

$('#range').on('input change',function(){
  $('#slider_320').slick('slickGoTo',this.value-1);
});

$('#slider_320').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        dots: false,
        arrows: false,
})

$('#slider_doing_320').on('init reInit',function(event,slick){
  var amount = slick.slideCount;
  $('#range_doing').attr('max',amount);
})

$('#slider_doing_320').on('afterChange',function(e,slick,currentSlide){
  $('#range_doing').val(currentSlide+1);
})

$('#range_doing').on('input change',function(){
  $('#slider_320').slick('slickGoTo',this.value-1);
});

$('#slider_doing_320').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        dots: false,
        arrows: false,
})

$('#prices__slider_320').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        dots: false,
        arrows: false,
})


$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
      variableWidth: true,
        responsive: [
    {
      breakpoint: 480,
        settings: {
        dots: false,
        slidesToShow: 1,
        centerMode: true,
          
          
      }
    }
  ]
    });

});
    
//  плавный скролл

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



const checkbox = document.querySelector('#menu__toggle');
const btn_submit = document.querySelector('.header__logo');

checkbox.addEventListener('change', () => {
    if ( checkbox.menu__toggle ) {
        btn_submit.removeAttribute('disabled');
    } else {
        btn_submit.setAttribute('disabled', 'true');
    }
});



