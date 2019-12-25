$(".content__team").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    autoplaySpeed: 2000,
    responsive: [
      {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        
      }
    }
  ]
  });

  $(".popup").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000
  });

  //if ($('.content__width').css('width') <= '700px'){
  // $('.content__name').css({'color' : 'rgb(255, 0, 0)'});
  //}
  

  $('.content__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.content__slider_foto'
  });
  $('.content__slider_foto').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.content__slider',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

  function add_menu() {
    if ($('#menu').css('display') == 'none') 
        { 
            $('#menu').animate({width: 'show'}, 400); 
        } 
    else 
        {     
            $('#menu').animate({width: 'hide'}, 400); 
        } 
  }
  function add_menu1() {
    $('.burger__menu').addClass('show') 
    $('.lol').addClass('blue')
    $('.content__logo').addClass('hiden') 
    $('.content__burger').addClass('hiden') 
    $('.content__button').addClass('hiden') 
    $('.content__footer').addClass('hiden') 
  }

  
  function popup_burbers() {
    $('.content__width').addClass('show') 
    $('.content__menu').addClass('blur') 
    $('.content__line').addClass('blur') 
    $('.content__footer').addClass('blur') 
    $('.content__facebook').addClass('blur') 
    $('.content__instagram').addClass('blur') 
    $('.content__burger').addClass('blur') 
    $('.content__main_title_price').addClass('blur') 
    $('.content__button').addClass('blur') 
  }
  function closePopup_burbers() {
    $('.content__width').removeClass('show') 
    $('.content__menu').removeClass('blur') 
    $('.content__line').removeClass('blur') 
    $('.content__footer').removeClass('blur') 
    $('.content__facebook').removeClass('blur') 
    $('.content__instagram').removeClass('blur') 
    $('.content__burger').removeClass('blur') 
    $('.content__main_title_price').removeClass('blur') 
    $('.content__button').removeClass('blur') 
  }

  function popup_enter_andrii(){
    $('.content__width').removeClass('show')
    $('.content__data').addClass('show') 
    $('.content__barbersName').val('Андрій');
  }
  function popup_enter_tania(){
    $('.content__width').removeClass('show')
    $('.content__data').addClass('show') 
    $('.content__barbersName').val('Таня');
  }
  function popup_enter_ivan(){
    $('.content__width').removeClass('show')
    $('.content__data').addClass('show') 
    $('.content__barbersName').val('Іван');
  }

  function close_data() {
    $('.content__data').removeClass('show') 
    $('.content__menu').removeClass('blur') 
    $('.content__line').removeClass('blur') 
    $('.content__footer').removeClass('blur') 
    $('.content__facebook').removeClass('blur') 
    $('.content__instagram').removeClass('blur') 
    $('.content__burger').removeClass('blur') 
    $('.content__main_title_price').removeClass('blur') 
    $('.content__button').removeClass('blur') 

  }
  function close_popup() {
    $('.content__data').removeClass('show') 
    $('.content__width').removeClass('show')
    $('.content__popup').removeClass('show')
    $('.content__menu').removeClass('blur') 
    $('.content__line').removeClass('blur') 
    $('.content__footer').removeClass('blur') 
    $('.content__facebook').removeClass('blur') 
    $('.content__instagram').removeClass('blur') 
    $('.content__burger').removeClass('blur') 
    $('.content__main_title_price').removeClass('blur') 
    $('.content__button').removeClass('blur') 
    $('.content__price').removeClass('blur') 
  }


 
  function popup_pidtv() {
    if($('.content__phone').val()!=="" && $('.content__time').val()!=="" && $('.content__date').val()!=="" && $('.content__firstName').val()!=="" && $('.content__secondName').val()!==""){
      $('.content__data').removeClass('show') 
      $('.content__width').removeClass('show')
      $('.content__popup').addClass('show') 
      $('.content__price').addClass('blur') 
    } else{
      alert("Для успішного завершення запису, заповніть будь-ласка усі поля!")
    }
  }
 
