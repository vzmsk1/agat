import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelectorAll('[data-pan-zoom]').length) {
        document.querySelectorAll('[data-pan-zoom]').forEach((item) => {
            const img = item.querySelector('img');

            item.addEventListener('click', (e) => {
                img.classList.toggle('zoomIn');

                if (img.classList.contains('zoomIn')) {
                    gsap.to(img, { scale: 1.9, speed: 300 });
                } else {
                    gsap.to(img, { scale: 1, translateX: 0, translateY: 0, speed: 300 });
                }
            });

            Draggable.create(img, {
                bounds: item
            });
        });
    }
});
