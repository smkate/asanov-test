// "use strict";
// const equalHeight = document.querySelectorAll('.product-title');
const prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      slides = document.querySelectorAll('.product-card'),
      burger = document.querySelector('.burger-menu'),
      productCards = document.querySelectorAll('.product-card'),
      btnsBuy = document.querySelectorAll('.btn-buy'),
      nav = document.querySelector('.navbar'),
      footerTitleBox = document.querySelectorAll('.footer-col'),
      navLinks = document.querySelectorAll('.nav-item');


// OPEN Navbar menu
if (window.screen.width <= 992) {
    const navSlide = () => {
        // Toggle Nav
        burger.addEventListener ('click' , (event) => {       
            nav.classList.toggle('active');
    
            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }
    navSlide();
    
    for (let navLink of navLinks) {
        navLink.addEventListener('click', () => {
            navLink.classList.toggle('active');
        });
    };
}


// swipe slides
if (window.screen.width <= 992) {
    // console.log("mobile");
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}
else {
    // console.log("desktop");
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}


  for (let card of productCards) {
    card.addEventListener('mouseover', () => {
        card.classList.add('active');
    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('active');
    });
};

for (let btn of btnsBuy) {
    btn.addEventListener('click', () => {
        btn.classList.toggle('toggle');
    });
};

for (let title of footerTitleBox) {
    title.addEventListener('click', () => {
        title.classList.toggle('active');
    });
};