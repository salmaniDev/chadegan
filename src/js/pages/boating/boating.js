import '../../../sass/components/Layers/boating/main.scss'

import WaveSurfer from "wavesurfer.js"

window.addEventListener('load', () => {
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
