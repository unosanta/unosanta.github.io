---
  layout: null
sitemap:
exclude: 'yes'
---

var iUp = (function () {
  var t = 0,
    d = 150,
    clean = function () {
      t = 0;
    },
    up = function (e) {
      setTimeout(function () {
        $(e).addClass("up")
      }, t);
      t += d;
    },
    down = function (e) {
      $(e).removeClass("up");
    },
    toggle = function (e) {
      setTimeout(function () {
        $(e).toggleClass("up")
      }, t);
      t += d;
    };
  return {
    clean: clean,
    up: up,
    down: down,
    toggle: toggle
  }
})();

$(document).ready(function () {
  {% if site.disable_landing_page != true %}
  $('a.blog-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({ 'max-width': '530px', 'width': '40%' }, 400, swing = 'swing', function () { })
    }
  })

  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }
  {% endif %}

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })
  
  $(".iUp").each(function (i, e) {
    iUp.up(e);
  });

  $(".js-avatar")[0].onload = function () {
   $(".js-avatar").addClass("show");
  }

})
