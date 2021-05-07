(function($){
  $.chickenDinner = {
    defaults: {
      altTag: ['Banner Image manssss'],
      fadeInTime:1800,
      TheImages: ['dancestudio.jpg']
    }
  };
  
  $.fn.extend({
    chickenDinner:function(options) {
      $.extend({}, $.chickenDinner.defaults, options);
      return this.each(function() {
        var $panel = $('#panel');
        var TheImages = options.TheImages;
        var RandomMath = Math.floor(Math.random()*TheImages.length);
        var SelectedImage = TheImages[RandomMath];
        var imgPath = options.path + SelectedImage;
        var altTag = options.altTag;
        // Fade in Times
        var fadeInTime = options.fadeInTime;
        //Fade In animation - hide first
        $panel.css("background", "url('"+imgPath+"') center center no-repeat #666");
        $panel.css("background-size", "cover");
        // $(this).css('display', 'none').fadeIn(fadeInTime);
        // if(options.cssBG == 'true'){
        //   $(this).css('background-image', 'url(' + imgPath + ')');
        // } else{
        //   $(this).attr( {
        //     src: imgPath,
        //     alt: altTag
        //   });
        // }
      });
    }
  });
})(jQuery);