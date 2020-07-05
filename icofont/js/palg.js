$(document).ready(function () {
    "use strict";
   /* $(".header .navbar-dark .navbar-toggler").click(function () {
        $(".header .navbar-photo").fadeToggle();
    });

    $('.carousel').carousel({
        interval: 3000
    });
    
    $(".header .navbar-photo ul li a").click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });
    $('.header .navbar-photo ul li a').on('click', function (event) {
        $('.header .navbar-photo ul li').removeClass('active');
        $(this).closest('li').addClass('active');
    });
    
    if (wi <= 991) {
       $(".navbar .collapse").css("background-color", "rgba(0,0,0,0.5)");

    }
  
    */

   $("body").niceScroll({
    cursorcolor: "#F0542C",
    cursorwidth: "15px",
    zindex: [100000]
   });


   
     
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 400) {
        $("nav").css("background-color", "rgba(0,0,0,1)");
        $('nav').slideIn(500);
        } else {
        $("nav").css("background-color", "rgba(0,0,0,0)");
        }

        
    });
    
    

    $(".scroll i").click(function () {
        $("html,body").animate({ scrollTop : 0 }, 900);
    });

});


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 1000) {
        $(".scroll i").fadeIn();
    } 
    if (scroll <= 1000) {
        $(".scroll i").fadeOut();
    }

});

