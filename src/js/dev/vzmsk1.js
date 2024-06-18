import gsap from 'gsap';
import { bodyLock, bodyUnlock, removeClasses } from '../utils/utils';

document.addEventListener('DOMContentLoaded', function () {
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

    if (document.querySelector('.lang-dropdown__btn')) {
        const btn = document.querySelector('.lang-dropdown__btn');
        let btnText = btn.querySelector('.lang-dropdown__btn-txt');

        document.querySelectorAll('.lang-dropdown__input').forEach((input) => {
            input.addEventListener('click', () => {
                input.checked && (btnText.innerHTML = input.dataset.text);
            });
        });

        document.addEventListener('click', function (e) {
            if (e.target.closest('.lang-dropdown__btn')) {
                document.documentElement.classList.toggle('_show-lang-dropdown');
            } else if (
                (window.innerWidth > 768 && !e.target.closest('.lang-dropdown')) ||
                (window.innerWidth <= 768 &&
                    (!e.target.closest('.lang-dropdown__body') ||
                        e.target.closest('.lang-dropdown__close-btn')))
            ) {
                document.documentElement.classList.remove('_show-lang-dropdown');
            }
        });
    }

    if (document.querySelectorAll('.activities-btn').length) {
        document.querySelectorAll('.activities-btn').forEach((el) => {
            el.addEventListener('click', function () {
                document.documentElement.classList.add('_show-activities-menu');

                if (document.documentElement.classList.contains('lock')) {
                    document.documentElement.classList.add('_show-activities-menu_lock');
                } else {
                    bodyLock();
                }
            });
        });
        const closeBtn = document.querySelector('.activities-menu__close-btn');

        closeBtn &&
            closeBtn.addEventListener('click', function () {
                document.documentElement.classList.remove('_show-activities-menu');

                if (!document.documentElement.classList.contains('_show-activities-menu_lock')) {
                    bodyUnlock();
                } else {
                    setTimeout(() => {
                        document.documentElement.classList.remove('_show-activities-menu_lock');
                    }, 0);
                }
            });
    }

    if (document.querySelectorAll('.plants-info__card').length) {
        document.querySelectorAll('.plants-info__card').forEach((el) => {
            el.addEventListener('click', function () {
                if (window.innerWidth <= 768) {
                    el.classList.toggle('_is-active');
                }
            });
        });
    }
});

if (document.querySelector('.loader')) {
    const loader = document.querySelector('.loader');

    bodyLock();

    window.addEventListener('load', function () {
        gsap.to('.loader__logo-wrap', {
            'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 2,
            delay: 0.5,
            onComplete: () => {
                setTimeout(() => {
                    loader.classList.add('_is-hidden');
                    bodyUnlock();
                }, 700);
            }
        });
    });
}
