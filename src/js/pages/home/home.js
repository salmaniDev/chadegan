import '/src/sass/components/Layers/home/main.scss'

window.addEventListener('load', () => {
    const rightDiv = document.querySelector('.index_hero .right').offsetLeft
    const widthDiv = document.querySelector('.index_hero .right').offsetWidth
    const mainSec = document.querySelector('.index_hero').offsetWidth;
    const slider = document.querySelector('.index_hero .product_items')
    const padding = mainSec - widthDiv

    slider.style.paddingRight = (padding - rightDiv + widthDiv + 50) + 'px' ;
})