window.addEventListener('load', () => {
    const tabs = document.querySelectorAll('[tab_content_title]')
    const content = document.querySelectorAll('[tab_content_item]')

    if (tabs && content) {
        for (let tab of tabs) {

            tab.addEventListener('click', () => {
                tabs.forEach(item => {
                    item.classList.remove('active')
                })

                tab.classList.add('active')

                const contentId = tab.getAttribute('tab_content_title')

                content.forEach(item => {
                    item.classList.remove('active')
                })

                const element = document.querySelector(`[tab_content_item="${contentId}"]`)
                element.classList.add('active')

            })

        }
    }
})