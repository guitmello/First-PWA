$(window).scroll(function() {
    var scroll = $(window).scrollTop();
  
    if (scroll >= 550) {
      $("nav").addClass("menu-color");
  
    } else {
      $("nav").removeClass("menu-color");
    }
  });