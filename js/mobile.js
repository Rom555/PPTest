$(document).ready(function() {
  mobile = false; 
  function windowSize(){
    if ($(window).width() <= 400 && !mobile){
      $(".check-form").appendTo(".check-tabs__item--active");
      $(".hero__img").appendTo(".hero")
      mobile = true
    } else {
      $(".check-form").appendTo(".check")
      $(".hero__img").appendTo(".hero-wrapper")
      mobile = false
    }
  }

  $(window).on('load resize',windowSize);
})