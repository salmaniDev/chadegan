import '../../../sass/components/Layers/show-product/main.scss';

import $ from 'jquery';
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WaveSurfer from "wavesurfer.js"


window.addEventListener('load', () => {
    $(".product_view .right_slider .main_slider").slick({
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        rtl: false,
        asNavFor: '.product_view .right_slider .thumb_slider'
    });

    $('.product_view .right_slider .thumb_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        rtl: false,
        arrows: false,
        asNavFor: '.product_view .right_slider .main_slider',
    });

    const audioTags = document.querySelectorAll('[audio_wave]')

    audioTags.forEach(item => {
        if (!item) return;

        const wavesurfer = WaveSurfer.create({
            container: item,
            waveColor: "#DAEAFA",
            progressColor: "#0C6FCC",
            barWidth: 3,
            barGap: 5,
            responsive: true,
            height: 90,
            barRadius: 4,
            url: item.getAttribute('audio_src'),
            cursorWidth: 0,
        })
        const playBtn = document.querySelector(item.getAttribute('btn_id'))

        playBtn.addEventListener('click', () => {
            wavesurfer.playPause()
            playBtn.classList.toggle('active')
        })
    })
})

