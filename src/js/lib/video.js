import videojs from 'video.js';

function initVideoJS() {
    if (document.querySelectorAll('[data-videojs]').length) {
        const videos = document.querySelectorAll('[data-videojs]');
        videos.forEach((video) => {
            const data = video.dataset.videojs;
            const vjs = videojs(video, {
                controls: true,
                poster: data.length ? data : null
            });

            if (
                video.hasAttribute('data-videojs-autoplay') &&
                (window.innerWidth > 768 || video.dataset.videojsAutoplay === 'md')
            ) {
                vjs.controls(false);
                vjs.muted(true);
                vjs.loop(true);
                vjs.play().then(() => {
                    console.log(vjs);
                });
            }
        });
    }
}

window.addEventListener('load', function () {
    setTimeout(initVideoJS, 100);
});
