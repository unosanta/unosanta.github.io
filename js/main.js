---
  layout: null
sitemap:
exclude: 'yes'
---

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
    $('.content-wrapper__inner').css('display', 'block')
  }

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
    $('.content-wrapper__inner').css('display', 'block')
  }

  $('a.domain-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
  })

if (window.location.hash && window.location.hash == '#domain') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  {% endif %}


  $('.btn-mobile-menu__icon').click(function() {
      if ($('.navigation-wrapper').css('display') == "block") {
        $('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
          $('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
        });
        $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');

      } else {
        $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
      }
      $('.btn-mobile-menu__icon').toggleClass('social iconfont icon-list social iconfont icon-angleup animated fadeIn');
  });

  
  // $('.btn-mobile-menu').click(function () {
  //   $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
  //   $('.btn-mobile-menu__icon').toggleClass('social iconfont icon-list social iconfont icon-angleup animated fadeIn')
  // })

  // $('.navigation-wrapper .blog-button').click(function () {
  //   $('.navigation-wrapper').toggleClass('visible')
  //   $('.btn-mobile-menu__icon').toggleClass('social iconfont icon-list social iconfont icon-angleup animated fadeIn')
  // })


})
