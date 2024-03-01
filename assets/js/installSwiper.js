const swiper = new Swiper('.swiper', {
    
    direction: 'horizontal',
    loop: true,
    speed: 500,
    spaceBetween: 0,

  
    pagination: {
      el: '.swiper-pagination',
    },
  
 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });