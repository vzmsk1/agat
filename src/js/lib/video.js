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
        });
    }
}
initVideoJS();
