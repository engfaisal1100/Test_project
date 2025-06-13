
<!-- تهيئة Swiper -->
  const swiper = new Swiper('.mySwiper', {
    loop: false,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // التحكم بالأزرار
  document.querySelector('.swiper-button-next-custom').addEventListener('click', () => {
    swiper.slideNext();
  });

  document.querySelector('.swiper-button-prev-custom').addEventListener('click', () => {
    swiper.slidePrev();
  });



  const testimonialSwiper = new Swiper('.testimonialSwiper', {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.testimonial-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.testimonial-next',
      prevEl: '.testimonial-prev',
    },
  });


