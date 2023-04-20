// new Swiper("#swiper", {
//   effect: "fade"
// })

const swiper = new Swiper('.swiper', {
     // Optional parameters
     direction: 'fade',
    loop: true,
  
    // If we need pagination

     pagination: {

       el: '.swiper-pagination',

     },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
    },
  
  });