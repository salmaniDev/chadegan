window.addEventListener('load', () => {
    const faq_items = document.querySelectorAll('.faq_items >.item');

    for (const item of faq_items) {
        const item_desc = item.querySelector('.desc');
        const faq_item_desc_height = item_desc.offsetHeight + 20;
        item_desc.style.height = '0';

        item.addEventListener('click', e => {
            if (e.target.className === 'head') {
                for (const otherItem of faq_items) {    
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.desc').style.height = '0';
                    }
                }

                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                    item_desc.style.height = '0';
                } else {
                    item.classList.add('active');
                    item_desc.style.height = faq_item_desc_height + 'px';
                }
            }
        });
    }
});
