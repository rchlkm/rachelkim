// PORTFOLIO MIXITUP
$(function () {
  
  var filterList = {
  
    init: function () {
      // MixItUp plugin
      // http://mixitup.io
      $('#portfoliolist').mixItUp({
        selectors: {
          target: '.portfolio',
          filter: '.filter' 
        },
        load: {
          filter: ".web, .data, .misc"
        }     
      });                   
    }
  };
  filterList.init(); // Run the show!
}); 

// STICKY NAVBAR
$(document).ready(function() {
  // grab the initial top offset of the navigation 
    var stickyNavTop = $('.navbar').offset().top;
    
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function(){
      var scrollTop = $(window).scrollTop(); // our current vertical position from the top
           
      // if we've scrolled more than the navigation, change its position to fixed to stick to top,
      // otherwise change it back to relative
      if (scrollTop > stickyNavTop) { 
          $('.navbar').addClass('sticky');
      } else {
          $('.navbar').removeClass('sticky'); 
      }
  };

  stickyNav();
  // and run it again every time you scroll
  $(window).scroll(function() {
    stickyNav();
  });
});


// BULMA - navbar
document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});



