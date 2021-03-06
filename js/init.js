/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

jQuery(document).ready(function ($) {
  /*----------------------------------------------------*/
  /* FitText Settings
------------------------------------------------------ */

  setTimeout(function () {
    $("h1.responsive-headline").fitText(1, {
      minFontSize: "40px",
      maxFontSize: "90px"
    });
  }, 100);

  /*----------------------------------------------------*/
  /* Smooth Scrolling
------------------------------------------------------ */

  $(".smoothscroll").on("click", function (e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
      {
        scrollTop: $target.offset().top
      },
      800,
      "swing",
      function () {
        window.location.hash = target;
      }
      );
  });

  /*----------------------------------------------------*/
  /* Highlight the current section in the navigation bar
------------------------------------------------------*/

  var sections = $("section");
  var navigation_links = $("#nav-wrap a");

  sections.waypoint({
    handler: function (event, direction) {
      var active_section;

      active_section = $(this);
      if (direction === "up") active_section = active_section.prev();

      var active_link = $(
        '#nav-wrap a[href="#' + active_section.attr("id") + '"]'
      );

      navigation_links.parent().removeClass("current");
      active_link.parent().addClass("current");
    },
    offset: "35%"
  });

  /*----------------------------------------------------*/
  /*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

  $("header").css({ height: $(window).height() });
  $(window).on("resize", function () {
    $("header").css({ height: $(window).height() });
    $("body").css({ width: $(window).width() });
  });

  /*----------------------------------------------------*/
  /*	Fade In/Out Primary Navigation
------------------------------------------------------*/

  $(window).on("scroll", function () {
    var h = $("header").height();
    var y = $(window).scrollTop();
    var nav = $("#nav-wrap");

    if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
      nav.fadeOut("fast");
    } else {
      if (y < h * 0.2) {
        nav.removeClass("opaque").fadeIn("fast");
      } else {
        nav.addClass("opaque").fadeIn("fast");
      }
    }
  });

  /*----------------------------------------------------*/
  /*	Modal Popup
------------------------------------------------------*/

  $(".item-wrap a").magnificPopup({
    type: "inline",
    fixedContentPos: false,
    removalDelay: 200,
    showCloseBtn: false,
    mainClass: "mfp-fade"
  });

  $(document).on("click", ".popup-modal-dismiss", function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  /*----------------------------------------------------*/
  /*	Flexslider
/*----------------------------------------------------*/
  $(".flexslider").flexslider({
    namespace: "flex-",
    controlsContainer: ".flex-container",
    animation: "slide",
    controlNav: true,
    directionNav: false,
    smoothHeight: true,
    slideshowSpeed: 7000,
    animationSpeed: 600,
    randomize: false
  });

  /*----------------------------------------------------*/
  /*	contact form
------------------------------------------------------*/

  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var message = document.getElementById("message");

  name.addEventListener("input", function (event) {
    email.addEventListener("input", function (event) {
      message.addEventListener("input", function (event) {
        if (
          name.checkValidity() &&
          email.checkValidity() &&
          message.checkValidity()
        ) {
          $("form#gform button.submit").click(function () {
            $("#image-loader").fadeIn();
            $("#image-loader").fadeOut();
            $("#message-warning").hide();
            $("#gform").fadeOut();
            $("#message-success").fadeIn();
          });
        }
      });
    });
  });

  $("#moe").addClass("animated lightSpeedIn");
  $("#moe").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    $("#moe").removeClass("animated lightSpeedIn");
    $("#moe").addClass("animated infinite bounce");
  });
  $("#se").addClass("animated zoomIn");
  $("#grad").addClass("animated zoomIn");
  $("#date").addClass("animated zoomIn");
  $("#education").addClass("animated infinite pulse");
  $("#work").addClass("animated infinite pulse");
  $("#skills").addClass("animated infinite pulse");
  $("#os").addClass("animated infinite pulse");

  $("#windows").addClass("animated infinite pulse");
  $("#android").addClass("animated infinite pulse");
  $("#apple").addClass("animated infinite pulse");
  $("#linux").addClass("animated infinite pulse");

  $("#button").click(function () {
    $("#button").addClass("animated rubberBand");
    $('#button').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $("#button").removeClass("animated rubberBand");
    });
  });
});
