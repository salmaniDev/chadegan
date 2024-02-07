import '/src/sass/components/Layers/home/main.scss'

window.addEventListener('load', () => {
    const setSliderPadding = (infoElem,parrent, sliderElem) => {

        const infoDiv = document.querySelector(infoElem)
        const infoDivLeft = infoDiv.offsetLeft
        const infoDivWidth = infoDiv.offsetWidth

        const parrentDivWidth = document.querySelector(parrent).offsetWidth

        const sliderDiv = document.querySelector(sliderElem)

        sliderDiv.style.paddingRight = (parrentDivWidth - infoDivWidth - infoDivLeft + infoDivWidth) + 'px'

        // const rightDiv = document.querySelector('.index_hero .right').offsetLeft
        // const widthDiv = document.querySelector('.index_hero .right').offsetWidth
        // const mainSec = document.querySelector('.index_hero').offsetWidth;
        // const slider = document.querySelector('.index_hero .product_items')
        // const padding = mainSec - widthDiv

        // slider.style.paddingRight = (padding - rightDiv + widthDiv + 50) + 'px';
    }

    setSliderPadding('.index_hero .right', '.index_hero', '.index_hero .product_items')
    // setSliderPadding('.stories .left_info', '.index_hero', '.index_hero .product_items')
})