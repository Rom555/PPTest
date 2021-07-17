var newsSwiper = new Swiper(".news-swiper",{
  slidesPerView: 3,
  spaceBetween: 44,
  loop: true,
  navigation: {
    nextEl: ".news-swiper__button--next",
    prevEl: ".news-swiper__button--prev",
  }
})