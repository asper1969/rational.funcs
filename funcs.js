/*=================FUNCTIONS======================*/

  function swapSvg(){

    if($('.icon-svg')){
      jQuery('.icon-svg img, #block-block-13 .content a img, ' +
          '#block-multiblock-11 .content a img').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
          // Get the SVG tag, ignore the rest
          var $svg = jQuery(data).find('svg');

          // Add replaced image's ID to the new SVG
          if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
          }

          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');

          // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
          if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
          }

          // Replace image with new SVG
          $img.replaceWith($svg);

        }, 'xml');

      });
    }
  }

  function resizeText(el, textLen){
    var len = $(el).text().length;
    if(len > textLen){
      $(el).addClass('resize');
    }
  }

  function resizePage(){

    if($('body.front').length){

      if(location.hash == ''){
        var bodyHeight = $('.w-preload').innerHeight();
        $('body.front').css('height', '100vh');
      }

      if(location.hash == '#shop'){
        var bodyHeight = $('.w-split .split.shop').innerHeight();
        $('body.front').css('height', bodyHeight);

        if($('body.logged-in').length){
          $('body.front').css('height', bodyHeight + 29);
        }
      }

      if(location.hash == '#directions'){
        var bodyHeight = $('.w-split .split.directions').innerHeight();
        $('body.front').css('height', bodyHeight);

        if($('body.logged-in').length){
          $('body.front').css('height', bodyHeight + 29);
        }
      }
    }
  }

  var ww = (window.innerWidth > 0) ? window.innerWidth : screen.width;