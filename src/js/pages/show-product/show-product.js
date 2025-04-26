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

/*---------------------form----------------------*/
//create star
document.querySelectorAll('.box_stars').forEach(starContainer => {
    for (let i = 5; i >= 1; i--) {
        const starWrapper = document.createElement('span');
        starWrapper.classList.add('star');
        starWrapper.dataset.value = i;

        const icon = document.createElement('i');
        icon.className = 'icon icon-star-fill';
        starWrapper.appendChild(icon);

        starWrapper.addEventListener('click', function () {
            const value = this.dataset.value;
            const allStars = this.parentElement.querySelectorAll('.star');
            allStars.forEach(s => {
                s.classList.toggle('active', s.dataset.value <= value);
            });
            const inputName = this.parentElement.dataset.input;
            document.querySelector(`input[name="${inputName}"]`).value = value;
        });

        starContainer.appendChild(starWrapper);
    }
});

// create code
function generateCaptcha() {
    const code = Math.random().toString(36).substring(2, 7);
    document.getElementById('randomCode').textContent = code;
    return code;
}

let currentCaptcha = generateCaptcha();

// send form
document.getElementById('reviewForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const userCaptcha = this.captchaInput.value.trim();
    if (userCaptcha !== currentCaptcha) {
        alert('کد کپچا اشتباه است. لطفاً دوباره امتحان کنید.');
        currentCaptcha = generateCaptcha();
        return;
    }

    alert('فرم با موفقیت ارسال شد!');
    this.reset();
    currentCaptcha = generateCaptcha();
    document.querySelectorAll('.star.active').forEach(star => star.classList.remove('active'));
});

//upload image
const uploadBtn = document.getElementById('uploadBtn');
const imagesInput = document.getElementById('images');
const fileNames = document.getElementById('fileNames');

uploadBtn.addEventListener('click', () => {
    imagesInput.click();
});

imagesInput.addEventListener('change', () => {
    if (imagesInput.files.length > 0) {
        const namesArray = Array.from(imagesInput.files).map(file => file.name);
        fileNames.textContent = namesArray.join('، ');
    } else {
        fileNames.textContent = 'هیچ فایلی انتخاب نشده';
    }
});
