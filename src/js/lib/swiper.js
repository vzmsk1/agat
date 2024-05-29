import Swiper from 'swiper';
import 'swiper/css';
import { remToPx } from '../utils/utils';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';

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
            },
            on: {
                afterInit: (swiper) => {
                    swiper.pagination.update();
                    swiper.slideTo(0);
                }
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
    if (document.querySelector('.news-chapter__swiper')) {
        new Swiper('.news-chapter__swiper', {
            modules: [Navigation, Pagination, EffectFade],
            speed: 800,
            loop: true,
            slidesPerView: 1,
            spaceBetween: remToPx(4),
            effect: 'fade',
            navigation: {
                prevEl: '.news-chapter .i-btn_arr-prev',
                nextEl: '.news-chapter .i-btn_arr-next'
            },
            pagination: {
                el: '.news-chapter__pagination',
                type: 'bullets',
                clickable: true
            }
        });
    }
    if (document.querySelector('.standards__swiper')) {
        new Swiper('.standards__swiper', {
            modules: [Navigation],
            speed: 800,
            loop: true,
            slidesPerView: 1,
            spaceBetween: remToPx(4),
            navigation: {
                prevEl: '.standards .i-btn_arr-prev',
                nextEl: '.standards .i-btn_arr-next'
            },
            breakpoints: {
                768: {
                    slidesPerView: 3
                }
            }
        });
    }
    if (document.querySelector('.plants-info__list-wrap') && window.innerWidth <= 768) {
        new Swiper('.plants-info__list-wrap', {
            modules: [Pagination],
            speed: 800,
            loop: true,
            slidesPerView: 1,
            spaceBetween: remToPx(4),
            pagination: {
                el: '.plants-info__pagination',
                type: 'bullets',
                clickable: true
            }
        });
    }
    if (document.querySelector('.advantages__swiper') && window.innerWidth <= 768) {
        new Swiper('.advantages__swiper', {
            modules: [Pagination],
            speed: 800,
            loop: true,
            autoHeight: true,
            slidesPerView: 1,
            spaceBetween: remToPx(4),
            pagination: {
                el: '.advantages__pagination',
                type: 'bullets',
                clickable: true
            }
        });
    }
    if (document.querySelector('.sales__swiper') && window.innerWidth <= 768) {
        new Swiper('.sales__swiper', {
            modules: [Pagination],
            speed: 800,
            loop: true,
            autoHeight: true,
            slidesPerView: 1,
            spaceBetween: remToPx(4),
            pagination: {
                el: '.sales__pagination',
                type: 'bullets',
                clickable: true
            }
        });
    }
    if (document.querySelector('.laboratory__swiper')) {
        new Swiper('.laboratory__swiper', {
            modules: [Pagination],
            speed: 800,
            loop: true,
            slidesPerView: 1,
            spaceBetween: remToPx(4),
            navigation: {
                prevEl: '.laboratory .i-btn_arr-prev',
                nextEl: '.laboratory .i-btn_arr-next'
            },
            pagination: {
                el: '.laboratory__pagination',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                768: {
                    slidesPerView: 2
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    initSliders();
});

window.addEventListener('resize', function () {
    const ww = window.innerWidth;

    setTimeout(() => {
        if (ww === window.innerWidth) {
            initSliders();
        }
    }, 500);
});
