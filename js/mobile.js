$(document).ready(function() {
  function windowSize(){
    if ($(window).width() <= 400){
      $(".check-form").appendTo(".check-tabs__item--active");
      $(".hero__img").appendTo(".hero")
    }
    
  }

  $(window).on('load resize',windowSize);
})