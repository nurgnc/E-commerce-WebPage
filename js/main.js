// Brand Slider
$(".brand-slider")
    .not(".slick-intialized")
    .slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

// Discount Slider
$(".discount-slider")
    .not(".slick-intialized")
    .slick({
        prevArrow: $('.prev-discount'),
        nextArrow: $('.next-discount'),
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });

// New Product Slider
$(".new-slider")
    .not(".slick-intialized")
    .slick({
        prevArrow: $('.prev-new'),
        nextArrow: $('.next-new'),
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });

// Reference Slider
$(".common-slider-logo")
    .not(".slick-intialized")
    .slick({
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });