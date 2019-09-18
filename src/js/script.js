"use strict";
$(function () {
    $('.slider').slick({
        infinite: true,
        speed: 500,
        useTransform: true,
        // autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    arrows: false,
                }
            },
        ]
    });


    $('.dl-active').on('click', function (e) {
        e.preventDefault();
        $('#dl-menu ul.dl-menu').toggleClass('dl-menuopen')
    })
    const haightHeader = $('.header').height();
    if(haightHeader > 70){
        $('#dl-menu').css('top', '24px');
    }

    if (window.matchMedia("(max-width: 1024px)").matches){
        $('#dl-menu').addClass('dl-menuwrapper');
        $('.nav__menu--desktop').addClass('dl-menu');
    }
    else if (window.matchMedia("(min-width: 1025px)").matches){
        $('#dl-menu').removeClass('dl-menuwrapper');
        $('.nav__menu--desktop').removeClass('dl-menu');
    }

});

$(window).resize(function(){
    const haightHeader = $('.header').height();
    if(haightHeader >= 70){
        $('#dl-menu').css('top', '24px');
    }
    if (window.matchMedia("(max-width: 1023px)").matches){
        $('#dl-menu').addClass('dl-menuwrapper');
        $('.nav__menu--desktop').addClass('dl-menu');
    }
    else  if (window.matchMedia("(min-width: 1024px)").matches){
        $('#dl-menu').removeClass('dl-menuwrapper');
        $('.nav__menu--desktop').removeClass('dl-menu');
    }
});




