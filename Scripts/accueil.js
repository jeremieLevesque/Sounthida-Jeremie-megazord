const swiper = new Swiper('.swiper-container-accueil', {

    direction: 'horizontal',
    loop: false,
    speed: 800,
    slidesPerView: 1,
    effect: 'slide',


    pagination: {
      el: '.swiper-pagination-accueil',
    },

  });

/*animation section GSAP*/
gsap.registerPlugin(ScrollTrigger);  

  
  const sectionList = document.querySelectorAll('.section-acc');

  sectionList.forEach(section => {

      const title = section.querySelector('.accueil-title');
      const content = section.querySelector('.accueil-content');

      gsap.timeline({

        scrollTrigger: {
          markers: false,
          start: "top 20%",
          trigger: section,          
          toggleActions: "play stop play reverse"
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
          y: -50
                  
        },
        {
          opacity: 1,
          y: 0
 
        }, 0
        
      )      
  });

/*animation-emo*/

let timeout;
let body = document.body;


gsap.to('.emo-animation', {

  scrollTrigger: {
    scrub: true,
    trigger: ".barre-laterale-accueil",
    onUpdate: (e) => {
      
      body.classList.add("is-scrolling");
     
      clearTimeout(timeout);
     
      timeout = setTimeout(() => {
        body.classList.remove("is-scrolling");
      }, 250);
      
      if (e.direction == 1) {
        body.classList.remove("emo-scrollup");
        body.classList.add("emo-scrolldown");
      } 
      else {
        body.classList.remove("emo-scrolldown");
        body.classList.add("emo-scrollup");
        
      }
    }
  },
})
