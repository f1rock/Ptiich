
$('.contacts-form__form').on('submit', function (event) {

    event.stopPropagation();
    event.preventDefault();

    let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]')


    $('.submit', form).val('Отправка...');
    $('input, textarea', form).attr('disabled','');

    data.append( 'name', 		$('[name="user_name"]', form).val() );
    data.append( 'email', 		$('[name="user_mail"]', form).val() );
    data.append( 'text', 		$('[name="user_message"]', form).val() );
   

    files.each(function (key, file) {
        let cont = file.files;
        if ( cont ) {
            $.each( cont, function( key, value ) {
                data.append( key, value );
            });
        }
    });
    
    $.ajax({
        url: 'php/ajax.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr();

            if ( myXhr.upload ) {
                myXhr.upload.addEventListener( 'progress', function(e) {
                    if ( e.lengthComputable ) {
                        let percentage = ( e.loaded / e.total ) * 100;
                            percentage = percentage.toFixed(0);
                        $('.submit', form)
                            .html( percentage + '%' );
                    }
                }, false );
            }

            return myXhr;
        },
        error: function( jqXHR, textStatus ) {
            // Тут выводим ошибку
        },
        complete: function() {
            // Тут можем что-то делать ПОСЛЕ успешной отправки формы
          // alert('Необработанная ошибка. Проверьте консоль и устраните.');
          $('.form__btn').attr('disabled', 'disabled');
          $('.modal').addClass('modal_active');
          $('body').addClass('hidden');
            console.log('Complete')
            form.reset() 
        }
    });

    return false;
});

// отключение кнопки до заполнения формы
const checkParams = () => {
    const user_name = $('.form__text').val();
    const user_message = $('.form__msg').val();
    const user_mail = $('.form__email').val();
    
    if (user_name.length && user_message.length && user_mail.length) {
        $('.form__btn').removeAttr('disabled');
    } else {
        $('.form__btn').attr('disabled', 'disabled');
    }
}

// popup "спасибо!" оставить заявку
// $(function () {
//   $('#order-button').click(function (e) {
//     e.preventDefault();
//     $('.modal').addClass('modal_active');
//     $('body').addClass('hidden');
//   });

  $('.modal__close-button').click(function (e) {
    e.preventDefault();
    $('.modal').removeClass('modal_active');
    $('body').removeClass('hidden');
  });

  $('.modal').mouseup(function (e) {
    let modalContent = $('.modal__content');
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
  });
// });

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




