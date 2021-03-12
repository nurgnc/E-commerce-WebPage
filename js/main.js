$(".common-slider")
    .not(".slick-intialized")
    .slick({
        prevArrow: ".slick-slider .prev",
        nextArrow: ".slick-slider .next",
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });