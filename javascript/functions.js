
$(document).ready(function() {

  setTimeout(function() {

    // Load screen
    $("hero").ready(function(){
      $('.load-overlay').addClass('dissapear');
      $('.load-overlay').addClass('remove');

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
  }, 300);

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
  }, 1200);

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
    console.log(i);
    $(".logos").css({
      "transform" : "translate(-50%, -50%) rotate("+ (i * speed) +"deg)"
    });

    $(".html-logo").css({
      "transform" : "rotate(-"+ (i * speed) +"deg)"
    });

    $(".css-logo").css({
      "transform" : "rotate(-"+ (i * speed) +"deg)"
    });

    $(".php-logo").css({
      "transform" : "rotate(-"+ (i * speed) +"deg)"
    });

    $(".laravel-logo").css({
      "transform" : "rotate(-"+ (i * speed) +"deg)"
    });

    $(".jQuery-logo").css({
      "transform" : "rotate(-"+ (i * speed) +"deg)"
    });

    $(".java-logo").css({
      "transform" : "rotate(-"+ (i * speed) +"deg)"
    });

    $(".vb-logo").css({
      "transform" : "rotate(-"+ (i * speed) +"deg)"
    });

    $(".cpp-logo").css({
      "transform" : "rotate(-"+ (i * speed) +"deg)"
    });

    $(".bootstrap-logo").css({
      "transform" : "rotate(-"+ (i * speed) +"deg)"
    });

    $(".js-logo").css({
      "transform" : "rotate(-"+ (i * speed) +"deg)"
    });

    $(".sass-logo").css({
      "transform" : "rotate(-"+ (i * speed) +"deg)"
    });

    $(".git-logo").css({
      "transform" : "rotate(-"+ (i * speed) +"deg)"
    });

    $(".c-logo").css({
      "transform" : "rotate(-"+ (i * speed) +"deg)"
    });
    i++;
  }, rotate);


  // animates in the paragraphs
  $(window).on("scroll", function() {
      var wScroll = $(window).scrollTop();
      if (wScroll > $('.content-container').offset().top - $(window).height() / 3) {
        $(".content-container").addClass("is_showing");
      }
      if (wScroll > $('.ed-content-container').offset().top - $(window).height()/1.5) {
        $(".ed-content-container").addClass("is_showing");
      }
  });


});
