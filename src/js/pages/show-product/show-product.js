import '../../../sass/components/Layers/show-product/main.scss';

import $ from 'jquery';
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


$(document).ready(() => {
    $(".product_view .right_slider .main_slider").slick({
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        rtl:true,
        asNavFor: '.product_view .right_slider .thumb_slider'
    });

    $('.product_view .right_slider .thumb_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        rtl: true, // تنظیم راست به چپ بودن
        arrows: false,
        asNavFor: '.product_view .right_slider .main_slider',
    });
});