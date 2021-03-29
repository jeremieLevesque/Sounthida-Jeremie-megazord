gsap.registerPlugin(ScrollTrigger);

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


const sectionList = document.querySelectorAll(".section");

sectionList.forEach(section => {

    const title = document.querySelector(".album1");
    const image = document.querySelector(".img1");

    gsap.timeline({

      scrollTrigger: {
        markers: true,
        trigger: section,
        start: "bottom bottom";
        //toggleActions: ;
      }

      title.from {
        scale: 2
      }

      img.from {


      }

    });