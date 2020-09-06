// "use strict";
const equalHeight = document.querySelectorAll('.product-title');
const burger = document.querySelector('.burger-menu');
const productCards = document.querySelectorAll('.product-card');
const btnsBuy = document.querySelectorAll('.btn-buy');
const footerTitle = document.querySelectorAll('.footer__title');
const prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      slides = document.querySelectorAll('.product-card');

console.log(slides);


    // for(let elem of equalHeight) {
    //    const max = Math.max(max, (elem[i]).offsetHeight);
    //    console.log(max);
    // }
    // equalHeight.offsetHeight = 'height', max+'px';
// }

let index = 0,
    sliderBox = document.querySelector('.products-box'),
    width = 240, // ширина картинки
    count = 1, // видимое количество изображений
    position = 0; // положение ленты прокрутки

// 


const nextSlide = () => {
    if (index < slides.length) {
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (slides.length - count));
      sliderBox.style.marginLeft = position + 'px';
      index++;
    }
  };
  
  const prevSlide = () =>  {
    if (index > 0) {
        // сдвиг влево
        position += width * count;
        // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
        position = Math.min(position, 425)
        sliderBox.style.marginLeft = position + 'px';
        index--;
    }
  };
  
  
  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);


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