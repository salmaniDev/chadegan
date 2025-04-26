import '/src/sass/components/Layers/home/main.scss'

window.addEventListener('load', () => {

        const rightDiv = document.querySelector('.index_hero .right').offsetLeft
        const widthDiv = document.querySelector('.index_hero .right').offsetWidth
        const mainSec = document.querySelector('.index_hero').offsetWidth;
        const slider = document.querySelector('.index_hero .product_items')
        const padding = mainSec - widthDiv

        slider.style.paddingRight = (padding - rightDiv + widthDiv + 50) + 'px';
})

window.addEventListener('DOMContentLoaded', () => {
        const scrollContainer = document.querySelector('.product_items');
        const btnLeft = document.querySelector('.scroll_action .icon-arrow-left-circle');
        const btnRight = document.querySelector('.scroll_action .icon-arrow-right-circle');

        const scrollAmount = 500;

        btnLeft.addEventListener('click', (e) => {
                e.preventDefault();
                scrollContainer.scrollBy({
                        left: -scrollAmount,
                        behavior: 'smooth'
                });
        });

        btnRight.addEventListener('click', (e) => {
                e.preventDefault();
                scrollContainer.scrollBy({
                        left: scrollAmount,
                        behavior: 'smooth'
                });
        });

        let isDown = false;
        let startX;
        let scrollLeft;

        scrollContainer.addEventListener('mousedown', (e) => {
                isDown = true;
                scrollContainer.classList.add('dragging');
                startX = e.pageX - scrollContainer.offsetLeft;
                scrollLeft = scrollContainer.scrollLeft;
                e.preventDefault();
        });

        scrollContainer.addEventListener('mouseleave', () => {
                isDown = false;
                scrollContainer.classList.remove('dragging');
        });

        scrollContainer.addEventListener('mouseup', () => {
                isDown = false;
                scrollContainer.classList.remove('dragging');
        });

        scrollContainer.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - scrollContainer.offsetLeft;
                const walk = (x - startX) * 1;
                scrollContainer.scrollLeft = scrollLeft - walk;
        });
});
