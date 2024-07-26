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

            // Проверка возможности автоплей
            const autoplayEnabled = video.hasAttribute('data-videojs-autoplay') &&
                                    (window.innerWidth > 768 || video.dataset.videojsAutoplay === 'md');
            
            if (autoplayEnabled) {
                vjs.controls(false);
                vjs.muted(true);
                vjs.loop(true);
                vjs.play().catch((error) => {
                    console.error("Autoplay failed:", error);
                });
            }

            vjs.on('error', (e) => {
                console.error("Video.js error:", e);
            });
        });
    }
}

window.addEventListener('load', function () {
    setTimeout(initVideoJS, 500);
});
