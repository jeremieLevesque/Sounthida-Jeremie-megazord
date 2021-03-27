
gsap.registerPlugin(ScrollTrigger);


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
  
  const sectionList = document.querySelectorAll(".section");

  sectionList.forEach(section => {

      const title = document.querySelector(".accueil-title");
      const content = document.querySelector(".accueil-content");

      gsap.timeline() {

        scrollTrigger {
          markers: true;
          trigger: ".section";
          start: "bottom bottom";
          //toggleActions: ;
        }

        title.from {

        }

        content.from {


        }

      });


