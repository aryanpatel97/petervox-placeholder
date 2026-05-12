$(".header-slider").slick({
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  prevArrow: ".Funeral-section .prev-arrow",
  nextArrow: ".Funeral-section .next-arrow",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      },
    },

    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false,
        infinite: false,
      },
    },
  ],
});

$(".nav-link").on("click", function () {
  setTimeout(function () {
    $(".header-slider").slick("setPosition");
  }, 300);
});

$(".help-slider").slick({
  arrows: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: ".help-section .prev-arrow",
  nextArrow: ".help-section .next-arrow",

  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".sliding-slider").slick({
  arrows: true,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: ".sliding-items-section .prev-arrow",
  nextArrow: ".sliding-items-section .next-arrow",

  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".testimonial-slider").slick({
  arrows: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: ".testimonial-section .prev-arrow",
  nextArrow: ".testimonial-section .next-arrow",

  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".history-slider").slick({
  autoplay: false,
  centerMode: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: ".history-slider-section .prev-arrow",
  nextArrow: ".history-slider-section .next-arrow",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".card-slider").slick({
  centerMode: true,
  centerPadding: "40px",
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});