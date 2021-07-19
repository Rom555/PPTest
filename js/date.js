$(document).ready(function() {
  $(".form__date").datepicker({ dateFormat: "dd.mm.yy" })
  $(".form__date-icon").click(function (e) { 
    e.preventDefault();
    $(".form__date").datepicker("show")
  });
})