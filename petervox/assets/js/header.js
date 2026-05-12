$(".menu-toggle").click(function (e) {
  e.preventDefault();

  if (!$(".menu-toggle").hasClass("activate")) {
    // Open menu
    $(".menu-toggle").addClass("activate");
    $(".main-header").addClass("res-header-active");
    $("html").addClass("overflow-hidden");
  } else {
    // Close menu
    $(".menu-toggle").removeClass("activate");
    $(".main-header").removeClass("res-header-active");
    $("html").removeClass("overflow-hidden");
  }
  $(".mega-link").removeClass("res-menu-active");
});

$(document).ready(function () {

  function handleMegaMenu() {

    const isMobile = $(window).width() <= 1025;

    // Remove old events first
    $(".header-link .nav-link").off("click");
    $(".header-link").off("mouseenter mouseleave");

    if (isMobile) {

      $(".header-link").each(function () {

        const menuItem = $(this);

        // Skip if mega menu doesn't exist
        if (menuItem.children(".mega-menu").length === 0) {
          return;
        }

        menuItem.find(".nav-link").on("click", function (e) {

          e.preventDefault();
          e.stopPropagation();

          $(".header-link")
            .not(menuItem)
            .removeClass("res-menu-active");

          menuItem.toggleClass("res-menu-active");

        });

      });

      $(".mega-menu").on("click", function (e) {
        e.stopPropagation();
      });

      $(".main-header").removeClass("hover-active");

    } else {

      $(".header-link").removeClass("res-menu-active");

      $(".header-link").on("mouseenter", function () {
        $(".main-header").addClass("hover-active");
      });

      $(".header-link").on("mouseleave", function () {
        $(".main-header").removeClass("hover-active");
      });

    }
  }

  handleMegaMenu();

  $(window).on("resize", function () {
    handleMegaMenu();
  });

});

// header fixed js
var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
$(window).scroll(function () {
  var sticky = $(".main-header"),
    scroll = $(window).scrollTop();
  if (scroll >= 50) {
    sticky.addClass("header-fixed");
    sticky.removeClass("header-fixed-os");
  } else {
    sticky.removeClass("header-fixed");
    sticky.addClass("header-fixed-os");
  }
  var currentScrollPos =
    window.pageYOffset || document.documentElement.scrollTop;
  if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
    $(".main-header").removeClass("hidden");
  } else {
    $(".main-header").addClass("hidden");
  }
  prevScrollPos = currentScrollPos;
});