(function() {
  'use strict';

  /* LODING
------------------------------*/
(function(){
  const loading = document.getElementById('loading');

  imagesLoaded( '.mv-block', { background: ".Backimage-slider" }, function() {
    const msM = 1000;
    loading.style.transition = 'opacity ' + msM + 'ms';
    
    const loadingOpacity = function(){
       loading.style.opacity = 0;
    }
    const loadingDisplay = function(){
      loading.style.display = "none";
    }
   
    setTimeout(loadingOpacity, 1000);
    setTimeout(loadingDisplay, 10000 + msM);
  });
}());

/* HEADER
------------------------------*/

(function() {
  window.onload = function(){
    let element = document.getElementById('PageTitles').classList.add('is-hidden');
  };
}());





// (function() {
//   const mySwiper = new Swiper('.sec01 .swiper', {
//     effect: 'fade',
//     fadeEffect: {
//       crossFade: true,
//     },
//     loop: true,
//     loopAdditionalSlides: 1,
//     speed: 500,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//       waitForTransition: false,
//     },
//     followFinger: false,
//     pagination: {
//       el: '.sec01 .swiper-pagination',
//       clickable: true,
//     },
//   });
// }());

// (function() {
//   const mySwiper2 = new Swiper('.sec03 .swiper', {
//     effect: 'fade',
//     fadeEffect: {
//       crossFade: true,
//     },
//     loop: true,
//     loopAdditionalSlides: 1,
//     speed: 500,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//       waitForTransition: false,
//     },
//     followFinger: false,
//     pagination: {
//       el: '.sec03 .swiper-pagination',
//       clickable: true,
//     },
//   });
// }());

/* sec02,sec04 TitleSlide
------------------------------*/
(function() {
  const listWrapperEl = document.querySelector('.sec02 .side-scroll-list-wrapper');
  const listEl = document.querySelector('.sec02 .side-scroll-list');
  
  gsap.to(listEl, {
    x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
    ease: 'none',
    scrollTrigger: {
      trigger: '.sec02 .side-scroll',
      start: 'top bottom', // 要素の上端（top）が、ビューポートの上端（top）にきた時
      end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
}());
(function() {
  const listWrapperEl = document.querySelector('.sec04 .side-scroll-list-wrapper');
  const listEl = document.querySelector('.sec04 .side-scroll-list');
  
  gsap.to(listEl, {
    x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
    ease: 'none',
    scrollTrigger: {
      trigger: '.sec04 .side-scroll',
      start: 'top bottom', // 要素の上端（top）が、ビューポートの上端（top）にきた時
      end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
}());

/* UpperSlide / LowerSlide
------------------------------*/
(function() {
  const swiperSpeed = 10000;
  const slideLength = document.querySelectorAll('.SlideShow .UpperSlide .swiper-slide').length;

  const changeTranslate = (swiper, activeSlide, direction) => {
    let currentTranslate = swiper.getTranslate();
    let slideWidth = activeSlide.offsetWidth;
    if(direction) {
      swiper.setTranslate(currentTranslate - slideWidth);
    } else {
      swiper.setTranslate(currentTranslate + slideWidth);
    }
    swiper.setTransition(swiperSpeed);
  }

  const initSwiper = (target) => {
    let params = {
      slidesPerView: 'auto',
      loop: true,
      loopedSlides: slideLength,
      speed: swiperSpeed,
      spaceBetween: 16,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      freeMode: {
        enabled: true,
        momentum: false,
      },
      breakpoints: {
        // ウィンドウサイズが320px以下
        320: {
          slidesPerView: 1.5,
        },
        // ウィンドウサイズが480px以下
        480: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        // ウィンドウサイズが640px以下
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      },
      grabCursor: true,
    };

    if (target === 'a') {
      params.on = {
        touchEnd: (swiper) => {
          let activeSlide = document.querySelector('.SlideShow .UpperSlide .swiper-slide-active');
          changeTranslate(swiper, activeSlide, true);
        },
      };
      const mySwiper_a = new Swiper('.SlideShow .UpperSlide', params);
    } else if (target === 'b') {
      params.autoplay.reverseDirection = true;
      params.on = {
        touchEnd: (swiper) => {
          let activeSlide = document.querySelector('.SlideShow .LowerSlide .swiper-slide-active');
          changeTranslate(swiper, activeSlide, false);
        },
      };
      const mySwiper_b = new Swiper('.SlideShow .LowerSlide', params);
    }
  };

  window.addEventListener('load', function(){
    initSwiper('a');
    initSwiper('b');
  });
}());








}());


