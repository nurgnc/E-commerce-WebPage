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
// Reference Slider
$(".common-slider-logo")
    .not(".slick-intialized")
    .slick({
        prevArrow: ".slick-slider .prev",
        nextArrow: ".slick-slider .next",
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });