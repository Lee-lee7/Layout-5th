$(function () {
    let header = $('.header');
    let banner = $('.baner');
    banner.css('padding-top', header.height() + banner.css('padding-top'))

    $(window).on('scroll', function (e) {
        if (window.pageYOffset > 0) {
            header.addClass('header_shadow');
        } else {
            header.removeClass('header_shadow');
        }
    })

    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 10000,
        fade: false,
        infinite: false,
        waitForAnimate: false,
        speed: 2000
    });
    $('.slider_second').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 10000,
        fade: true,
        speed: 2000
    });
  

});
