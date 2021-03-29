

var swiper = new Swiper('.swiper-container-discographie', {
  direction: 'vertical',
  effect: 'flip',
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination-discographie',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

gsap.registerPlugin(ScrollTrigger);  

  
  const sectionList = document.querySelectorAll('.section-disco');

  sectionList.forEach(section => {

      const title = section.querySelector('.tittle-disco');
      const content = section.querySelector('.content-disco');

      gsap.timeline({

        scrollTrigger: {
          markers: false,
          start: "top 10%",
          trigger: section,          
          toggleActions: "play none reverse none"
        }
      }) 

      .fromTo(title,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0
        }
      )         
      .fromTo(content,
        {
          opacity: 0,
          y: 50
                  
        },
        {
          opacity: 1,
          y: 0
 
        }, 0
        
      )      
  });


