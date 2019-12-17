$(".content__team").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000
  });
  $(".popup").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000
  });


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

  function popup_burbers() {
    $('.content__width').addClass('show') 
    //$('.main').addClass('blur') 
  }
  function closePopup_burbers() {
    $('.content__width').removeClass('show') 
  }
  function popup_enter(){
    $('.content__width').removeClass('show')
    $('.content__data').addClass('show') 
  }
  function close_data() {
    $('.content__data').removeClass('show') 
  }
  function close_popup() {
    $('.content__data').removeClass('show') 
    $('.content__width').removeClass('show')
    $('.content__popup').removeClass('show')
  }
  function popup_pidtv() {
    $('.content__data').removeClass('show') 
    $('.content__width').removeClass('show')
    $('.content__popup').addClass('show') 
  }
