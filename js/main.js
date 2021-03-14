// Brand Slider
$(".brand-slider")
    .not(".slick-intialized")
    .slick({
        prevArrow: $('.prev-discount'),
        nextArrow: $('.next-discount'),
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
//Daily Slider
$(".daily-slider")
    .not(".slick-intialized")
    .slick({
        prevArrow: $('.prev-daily'),
        nextArrow: $('.next-daily'),
        autoplay: false,
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
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,

            }

        }, {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    });

// Opportunity Product Slider
$(".opportunity-slider")
    .not(".slick-intialized")
    .slick({
        prevArrow: $('.prev-opportunity'),
        nextArrow: $('.next-opportunity'),
        autoplay: true,
        autoplaySpeed: 4000
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
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1

            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
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
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    });