(function() {
  'use strict';

  /* LODING
------------------------------*/
  //logoの表示
  $(window).on('load',function(){
    $("#loading").delay(5000).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#loading-main").delay(500).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
  });

/* HEADER
------------------------------*/
(function() {
  window.onload = function(){
    let element = document.getElementById('PageTitles').classList.add('is-hidden');
  };
}());

/* FADEIN-FADEOUT
------------------------------*/
(function() {
  const mySwiper = new Swiper('.mv01 .swiper', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
    loopAdditionalSlides: 1,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      waitForTransition: false,
    },
    followFinger: false,
    pagination: {
      el: '.mv01 .swiper-pagination',
      clickable: true,
    },
  });
}());
(function() {
  $(window).on('load', function() {
    HeroHeightSetting();
  });
  
  $(window).on('resize', function() {
    HeroHeightSetting();
  });
  
  function HeroHeightSetting() {
    var winW = $(window).width();
    var winH = $(window).height();
    var BREAKPOINT_SP = 1024;
  
    if ( winW <= BREAKPOINT_SP ) {
      $('.sec01 .mv01 .swiper').css('height', winH);
    } else {
      $('.sec01 .mv01 .swiper').css('height', 'auto');
    }
  }
}());

/* IntersectionObserver
------------------------------*/
(function() {
    const targets = document.querySelectorAll('.delay-element');

    function callback(entries, obs) {
      console.log(entries);
  
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }
    
        entry.target.classList.add('appear');
        obs.unobserve(entry.target);
      });
    }
  
    const options = {
      threshold: 0.2,
    };
  
    const observer = new IntersectionObserver(callback, options);
  
    targets.forEach(target => {
      observer.observe(target);
    });
}());

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
            // when window width is >= 320px
      320: {
        // slidesPerView: 1.5,
        // spaceBetween: 200
      },
            // when window width is >= 640px
      640: {
        spaceBetween: 3,
      },
        1025: {
          spaceBetween: 3,
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


