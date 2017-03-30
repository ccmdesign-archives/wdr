$(document).ready(function () {
  
  var x = $('.smartlink');
  
  $.each(x, function(i, val) {
    var ref = $(this);
    var ref_top = ref.offset().top;
    var ref_id = ref.attr('class').slice(-3); // this needs to be more robust

    var content_top = $('.prose__content').offset().top;

    var text_ref = $('.smartlink-content--' + ref_id );
    text_ref.css({top: ref_top - content_top });
    
  });

  x.click(function(){
    var ref_id = $(this).attr('class').slice(-3);

    if ($(this).hasClass('js-active')) {
      x.removeClass('js-active');      
      $('.smartlink-content').removeClass('js-active');
    } else {
      x.removeClass('js-active');
      $(this).addClass('js-active');
      $('.smartlink-content').removeClass('js-active');
      $('.smartlink-content--' + ref_id ).addClass('js-active');  
    }
  });






    // Smooth Scrolling Function
    $('a[href*=#]:not([href=#])').click(function () {
        var $targ = $(this.hash),
            host1 = this.hostname,
            host2 = location.hostname,
            path1 = this.pathname.replace(/^\//, ''),
            path2 = location.pathname.replace(/^\//, '');

        if (!$targ.length) {
            $targ = $('[name=' + this.hash.slice(1) + ']');
        }

        if ($targ.length && (host1 === host2 || path1 === path2)) {
            $('html, body').animate({ scrollTop: $targ.offset().top }, 1000);

            return false;
        }

        return true;
    });

    
}); // doc.ready
