jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // swiper main
  const swiper_main = new Swiper(".xxx_swiper .swiper_main", {
    loop: true,
    loopedSlides: 4,
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // swiper thumbs
  const swiper_thumbs = new Swiper(".xxx_swiper .swiper_thumbs", {
    loop: true,
    loopedSlides: 4,
    // slidesPerView: "auto",
    slidesPerView: 3,
    centeredSlides: true,
  });
  // swiper control
  swiper_main.controller.control = swiper_thumbs;
  swiper_thumbs.controller.control = swiper_main;
  // この中であればWordpressでも「$」が使用可能になる
});
