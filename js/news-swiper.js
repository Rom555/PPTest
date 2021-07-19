var newsSwiper = new Swiper(".news-swiper",{
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    400: {
      slidesPerView: 3,
      spaceBetween: 44,
    }
  },
  navigation: {
    nextEl: ".news-swiper__button--next",
    prevEl: ".news-swiper__button--prev",
  },
  pagination: {
    el: ".news-swiper__pagination",
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
    bulletClass: "news-swiper__pagination-bullet",
    bulletActiveClass: "news-swiper__pagination-bullet-active",
    clickable: false,
  },
})