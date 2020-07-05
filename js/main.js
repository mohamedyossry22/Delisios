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

     
   $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 400) {
    $("nav").css("background-color", "rgba(0,0,0,1)");
    $('nav').slideIn(500);
    } else {
    $("nav").css("background-color", "rgba(0,0,0,0)");
    }
$('#gallery').owlCarousel({
    items: 4,
    autoplay: true,
    loop: true,
    margin: 30,
    dots: true,
    responsiveClass: true,
    responsive: {

      320: {
        items: 1
      },
      480: {
        items: 2
      },
      600: {
        items: 2
      },
      767: {
        items: 3
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });

    
});

  
    */
  
   $(".menu ul.filters li ").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
});
$('.menu ul.filters li ').on('click', function (event) {
    $('.menu ul.filters li ').removeClass('active');
    $(this).closest('li').addClass('active');
});


   $(window).scroll(function () {
    if ($(window).scrollTop() >= 5200) {
        $('nav ul li').removeClass('active');
    $('nav ul li.tes').addClass('active');
    } else if ($(window).scrollTop() >= 3800) {
        $('nav ul li').removeClass('active');
    $('nav ul li.shot').addClass('active');
    } else if ($(window).scrollTop() >= 3000) {
        $('nav ul li').removeClass('active');
      $('nav ul li.fea').addClass('active');
      } else if ($(window).scrollTop() >= 1540) {
          $('nav ul li').removeClass('active');
      $('nav ul li.abou').addClass('active');
      }else if ($(window).scrollTop() >= 600){
          $('nav ul li').removeClass('active');
      $('nav ul li.serv').addClass('active');
      } else if ($(window).scrollTop() === 0){
          $('nav ul li').removeClass('active');
      $('nav ul li.ho').addClass('active');
    } 
});

   
   
  $("#comment").owlCarousel({
 
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,

    // "singleItem:true" is a shortcut for:
      items : 1, 
      itemsDesktop : false,
     itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false

});

$("#testmonial").owlCarousel({
 
  navigation : true, // Show next and prev buttons
  slideSpeed : 300,
  paginationSpeed : 400,
  singleItem:true,

  // "singleItem:true" is a shortcut for:
    items : 1, 
    itemsDesktop : false,
   itemsDesktopSmall : false,
  // itemsTablet: false,
  // itemsMobile : false

});

var $projects = $('.page .menu .boxing');

    $projects.isotope({
        itemSelector: '.menu-item',
        layoutMode: 'fitRows'
    });

    $('.page .menu ul.filters > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });

   $("nav ul li a").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
});
$('nav ul li a').on('click', function (event) {
    $('nav ul li').removeClass('active');
    $(this).closest('li').addClass('active');
});

   
    
    
    

    $(".fix span").click(function () {
        $("html,body").animate({ scrollTop : 0 }, 1100);
    });

});


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 1000) {
        $(".fix span").fadeIn(1000);
    } 
    if (scroll <= 1000) {
        $(".fix span").fadeOut();
    }

});




var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});