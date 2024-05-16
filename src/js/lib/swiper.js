import Swiper from 'swiper';
import 'swiper/css';
import { remToPx } from '../utils/utils';
import { Navigation, Pagination } from 'swiper/modules';

const mm = window.matchMedia('(max-width: 768px)');

function initSliders() {
    if (document.querySelector('.activities__swiper')) {
        new Swiper('.activities__swiper', {
            modules: [Navigation, Pagination],
            speed: 800,
            loop: true,
            slidesPerView: mm.matches ? 1 : 3,
            spaceBetween: remToPx(4.2),
            navigation: {
                prevEl: '.activities .i-btn_arr-prev',
                nextEl: '.activities .i-btn_arr-next'
            },
            pagination: {
                el: '.activities__pagination',
                type: 'bullets',
                clickable: true
            }
        });
    }
    if (document.querySelector('.products__swiper')) {
        new Swiper('.products__swiper', {
            modules: [Navigation, Pagination],
            speed: 800,
            loop: true,
            slidesPerView: mm.matches ? 1 : 3,
            spaceBetween: remToPx(4.2),
            centeredSlides: true,
            centeredSlidesBounds: true,
            navigation: {
                prevEl: '.products .i-btn_arr-prev',
                nextEl: '.products .i-btn_arr-next'
            },
            pagination: {
                el: '.products__pagination',
                type: 'bullets',
                clickable: true
            }
        });
    }
    if (document.querySelector('.news__swiper')) {
        new Swiper('.news__swiper', {
            modules: [Navigation, Pagination],
            speed: 800,
            loop: true,
            slidesPerView: mm.matches ? 1 : 3,
            spaceBetween: remToPx(4),
            navigation: {
                prevEl: '.news .i-btn_arr-prev',
                nextEl: '.news .i-btn_arr-next'
            },
            pagination: {
                el: '.news__pagination',
                type: 'bullets',
                clickable: true
            }
        });
    }
    if (document.querySelector('.complexes__swiper')) {
        if (mm.matches) {
            new Swiper('.complexes__swiper', {
                modules: [Pagination],
                speed: 800,
                loop: true,
                slidesPerView: 1,
                spaceBetween: remToPx(4),
                pagination: {
                    el: '.complexes__pagination',
                    type: 'bullets',
                    clickable: true
                }
            });
        }
    }
    if (document.querySelector('.exported-products__swiper')) {
        new Swiper('.exported-products__swiper', {
            modules: [Navigation],
            speed: 800,
            loop: true,
            slidesPerView: 1,
            spaceBetween: remToPx(4),
            navigation: {
                prevEl: '.exported-products .i-btn_arr-prev',
                nextEl: '.exported-products .i-btn_arr-next'
            },
            breakpoints: {
                768: {
                    slidesPerView: 4
                }
            }
        });
    }
    if (document.querySelector('.certificates__swiper')) {
        new Swiper('.certificates__swiper', {
            modules: [Navigation, Pagination],
            speed: 800,
            loop: true,
            slidesPerView: 1,
            autoHeight: true,
            spaceBetween: remToPx(4),
            navigation: {
                prevEl: '.certificates .i-btn_arr-prev',
                nextEl: '.certificates .i-btn_arr-next'
            },
            pagination: {
                el: '.certificates__pagination',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                768: {
                    slidesPerView: 4,
                    autoHeight: false
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    initSliders();
});
