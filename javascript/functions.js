
$(document).ready(function() {

    // Load screen
    var bg = $('.hero').css('background-image');

    if (bg) {
        var src = bg.replace(/(^url\()|(\)$|[\"\'])/g, ''),
          $img = $('<img>').attr('src', src).on('load', function() {
            // do something, maybe:
            $('.load-overlay').addClass('dissapear');
            //Need to remove the overlay so it doesnt
            //cover the page.
            setTimeout(function() {
                $('.load-overlay').hide();
            }, 500);
            // Animate in the Hero title and sub message
            setTimeout(function() {
                $(".hero-name").addClass("is_showing");
            }, 1000);
            setTimeout(function() {
                $(".welcome_breaker").addClass("is_showing");
            }, 1300);
            setTimeout(function() {
                $(".sub-welcome").addClass("is_showing");
            }, 1600);
          });
    }

    // Smooth Scroll
    $('a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
              var targetOffset = $target.offset().top;
              $('html, body')
              .animate({scrollTop: targetOffset}, 500);
             return false;
            }
        }
    });

    // Makes the down arrow on the hero flash.
    setInterval(function() {
        $('.down-arrow').toggleClass('flash');
    }, 1500);

    // Circles under rotating logos animate out.
    $(window).on("scroll", function() {
      var wScroll = $(window).scrollTop();
      if (wScroll > $('.skill-container').offset().top - $(window).height() / 2) {
        $(".circle-2").addClass("is_showing");
        $(".circle-3").addClass("is_showing");
        $(".circle-4").addClass("is_showing");
        $(".circle-5").addClass("is_showing");
      }
    });


    var i = 0;
    var speed = .025;
    var rotate = 20;

    // rotates the logos
    setInterval(function() {
        $(".logos").css({
          "transform" : "translate(-50%, -50%) rotate("+ (i * speed) +"deg)"
        });

        $(".rotate-logo").css({
          "transform" : "rotate(-"+ (i * speed) +"deg)"
        });

        i++;
    }, rotate);


    // animates in the paragraphs
    $(window).on("scroll", function() {
      var wScroll = $(window).scrollTop();
      if (wScroll > $('.content-container').offset().top - $(window).height() / 1.7) {
        $(".content-container").addClass("is_showing");
      }
    });

});
