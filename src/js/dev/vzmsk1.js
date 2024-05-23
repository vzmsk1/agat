import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { removeClasses } from '../utils/utils';

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

    if (document.querySelectorAll('.about-holding__tab').length) {
        const tabs = Array.from(document.querySelectorAll('.about-holding__tab'));
        const slides = Array.from(document.querySelectorAll('.about-holding__slide'));

        gsap.set(
            slides.filter((s) => s !== slides[0]),
            { opacity: 0 }
        );
        gsap.set(slides[0], { opacity: 1, zIndex: 1 });

        tabs.forEach((tab, idx) => {
            tab.addEventListener('click', (e) => {
                const slide = slides[idx];

                removeClasses(
                    tabs.filter((t) => t !== tab),
                    '_is-active'
                );

                tab.classList.add('_is-active');

                gsap.to(
                    slides.filter((s) => s !== slide),
                    { opacity: 0, duration: 0.4, delay: 0.5 }
                );
                gsap.to(slide, { opacity: 1, zIndex: 1, duration: 0.4 });
            });
        });
    }
});
