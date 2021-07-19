$(document).ready(function() {
  $(".hero-advantages__card").click(function (e) { 
    e.preventDefault();
    $(this).children(".hero-advantages-info").slideToggle({
      start: function() {
        $(this).css('display', 'flex')
      }
    });
  });
})