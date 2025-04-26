import '../../../sass/components/Layers/show-post/main.scss'

/*---------------------form----------------------*/
document.addEventListener('DOMContentLoaded', () => {
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

    // send form
    document.getElementById('form').addEventListener('submit', function (e) {
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
    const uploadBtn = document.getElementById('uploadBtn2');
    const imagesInput = document.getElementById('images2');
    const fileNames = document.getElementById('fileNames2');

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
});