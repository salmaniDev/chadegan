window.addEventListener('load', () => {
    const navbar = document.querySelector('.navbar')

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset >= 61) {
                navbar.classList.add('active');
            } else {
                navbar.classList.remove('active');
            }
        })
    }
})