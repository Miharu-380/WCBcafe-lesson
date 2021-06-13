$(function() {

  $('.hamburger').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
        $('nav').addClass('active');
    } else {
        $('nav').removeClass('active');
    }
  });
  
  $('.item').click(function(){
    var btnIndex = $(this).index();
    $('.item-modal').eq(btnIndex).addClass('is-open');
  });

  $('.close-modal').click(function(){
    $('.item-modal').removeClass('is-open');
  });

  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });

});

