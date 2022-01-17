$(function(){
  // modalWindow
  $('#trigger').click(function(){
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      $('.modalWindow').fadeIn();
      $('body').css('overflow','hidden');
    }else{
      $('.modalWindow').fadeOut();
      $('body').css('overflow','auto');
    };
  });
  // pageTopに戻る
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $('#pageTop').fadeIn();
    }else{
      $('#pageTop').fadeOut();
    };
  });
  $('#pageTop').click(function(){
    $('body, html').animate({scrollTop: 0}
    ), 500;
  });
})
