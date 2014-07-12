!function ($) {

  "use strict";

  var bEvent = function () {
    // Preloader
    function preloader() {
      $(window).load(function () {
        $(".preloader").fadeOut()
        $("body").removeClass("remove-scroll")
      });
    }
    // A jQuery plugin that enables HTML5 placeholder behavior for browsers that aren’t trying hard enough yet
    function placeholderIE() {
      if ($.fn.placeholder) {
        $("input, textarea").placeholder()
      }
    }
    // Reveal Animations When You Scroll
    function wow() {
      $(window).load(function () {
         new WOW().init()
      });     
    }
    
    // Return all functions
    return {
      init: function () {
        preloader()
        placeholderIE()
        wow()
      }
    }
  }();

  $(function () {
    // Launch functions
    bEvent.init()
  })
}(window.jQuery);