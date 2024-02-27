const big_slider = new Swiper('.big-slider__inner', {
    navigation: {
        nextEl: '.big-slider__arrow--right',
        prevEl: '.big-slider__arrow--left',
    },

    pagination: {
        el: '.big-slider__pagination',
        clickable: true,
        bulletClass: 'slider__pagination-item',
        bulletActiveClass: 'slider__pagination-item--active',
        renderBullet: function (index, className) {
            return '<li class="' + className + '">' + (index + 1) + '</li>'
        }
    },

    loop: true,
    effect: 'fade',
});

const article_slider = new Swiper('.article__inner', {
    navigation: {
        nextEl: '.article-slider__next',
        prevEl: '.article-slider__perv',
    },

    loop: true,
    slidesPerView: 'auto',
});

const footer_slider = new Swiper('.footer__slider', {
    navigation: {
        nextEl: '.footer__slider-next',
        prevEl: '.footer__slider-prev',
    },

    pagination: {
        el: '.footer-slider__pagination',
        clickable: true,
        bulletClass: 'slider__pagination-item',
        bulletActiveClass: 'slider__pagination-item--active',
        renderBullet: function (index, className) {
            if (index < 4) {
                return '<li class="' + className + '">' + (index + 1) + '</li>'
            } else {
                return '<li style="display: none;"></li>'
            }
        }
    },

    loop: true,

});

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
});
//==============================================================================
