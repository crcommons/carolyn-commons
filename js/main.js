/*
Welcome to my site. This is a work in progress 
that I am developing on my own time. Edits and 
suggestions are welcome!
*/

//sticky nav
// $(document).ready(function(){
//     $("#navigation").sticky({
//       topSpacing:0,
//       getWidthFrom: '#body'
//     });
//   });


$(document).ready(function(){
  $('.jobs').slick({
      autoplay: true,
       autoplaySpeed: 2000,
       //autoplay slick
  });
});

var $ = jQuery.noConflict();

// var controller = new ScrollMagic.Controller();

// var scene = new ScrollMagic.Scene({
//   triggerElement: '#tester', // starting scene, when reaching this element
//   duration: 400 // pin the element for a total of 400px
// })
// .setPin('#pinned-element1'); // the element we want to pin

// // Add Scene to ScrollMagic Controller
// controller.addScene(scene);


// function setPageHeight () {
//   var windowHeight = $(window).height();
//   var windowWidth = $(window).width();
//   // $('.home-page').css('height', windowHeight + 'px');
//   $('.home-page').css('width', windowWidth + 'px');
// };

// //set initial page height on load
// setPageHeight();

// //resize the height of the page based on height of window
// $(window).resize(setPageHeight);

// $.stellar({
//   responsive: true,
//   hideDistantElements: false, 
//   horizontalScrolling: false,

// });

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if( !isMobile.any() )
$(function(){
    $.stellar({
    	  // responsive: true,
    horizontalScrolling: false,
    });
});

