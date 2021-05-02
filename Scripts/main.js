
    modal = document.querySelector(".modal-QUIZ-body");
    let animWrapper = document.querySelector(".anim-bonne-rep");
    let animationWrapper = document.querySelector('.animation');

let questionsList = fetch("https://billytalent.qc.lu/json")
.then(result => result.json())
.then(data => new Quiz(data.questions))
.catch(error => console.log('Une erreur est survenue'));

class Quiz { 

  constructor(questionsList) {
    
    this.index = 0; 
    this.score = 0;
    this.questions = questionsList;
    
    this.questions.forEach((question, index) => {
      this.creerHTML(question, index);
      
    });       
       
    this.setVisible(this.index);    
    this.validation();
        
  }
    
  creerHTML(question, index) {
      this.el = document.createElement("div");
      this.el.classList.add("question");
      modal.appendChild(this.el);
    

    this.strongQuestion = document.createElement("strong");
    this.br = document.createElement("br");
    this.strongQuestion.innerText = question.q;
    this.el.appendChild(this.strongQuestion);
    this.el.appendChild(this.br);
    
     //radios buttons
     
    if(typeof question.o1 !== "undefined") {
      
      this.radio = document.createElement("input");
      this.radio.setAttribute("type", "radio");
      this.radio.setAttribute("name", "question " + index)
      this.radio.setAttribute("value", "1");
      this.el.appendChild(this.radio);
      
      this.label = document.createElement("label");
      this.label.innerText = question.o1;
      this.el.appendChild(this.label);
      
      this.radiobr = document.createElement("br");
      this.el.appendChild(this.radiobr);
    }
     
    if(typeof question.o2 !== "undefined") {
      
      this.radio = document.createElement("input");
      this.radio.setAttribute("type", "radio");
      this.radio.setAttribute("name", "question" + index )
      this.radio.setAttribute("value", "2");
      this.el.appendChild(this.radio);      
      
      this.label = document.createElement("label");
      this.label.innerText = question.o2;
      this.el.appendChild(this.label);
      
      this.radiobr = document.createElement("br");
      this.el.appendChild(this.radiobr);
    }
    
    
    if(typeof question.o3 !== "undefined") {
      
      this.radio = document.createElement("input");
      this.radio.setAttribute("type", "radio");
      this.radio.setAttribute("name", "question" + index);
      this.radio.setAttribute("value", "3");
      this.el.appendChild(this.radio);
      
      this.label = document.createElement("label");
      this.label.innerText = question.o3;
      this.el.appendChild(this.label);
      
      this.radiobr = document.createElement("br");
      this.el.appendChild(this.radiobr);
    }
     
    
    if(typeof question.o4 !== "undefined") {
      
      this.radio = document.createElement("input");
      this.radio.setAttribute("type", "radio");
      this.radio.setAttribute("name", "question" + index )
      this.radio.setAttribute("value", "4");
      this.el.appendChild(this.radio);
      
      this.label = document.createElement("label");
      this.label.innerText = question.o4;
      this.el.appendChild(this.label);
      
      this.radiobr = document.createElement("br");
      this.el.appendChild(this.radiobr);
    }
  }
  
  setVisible(number) {
    
    const divsQuestion = document.querySelectorAll(".question");  
    
    divsQuestion.forEach(div => {
      div.classList.remove("is-visible");
      divsQuestion[number].classList.add("is-visible");
      
   });
    console.log([number]);
  }
    
    
  validation() {
      
      const btnRadio = document.querySelectorAll("input[type=radio]");
      
      btnRadio.forEach((radioButton) => {
          radioButton.addEventListener("change", ()=> {
          
            if (radioButton.value == this.questions[this.index].r) {
              this.correct();            
                      
            }
            
            else {
              this.bad();
               
            }
            
            if (this.index <= this.questions.length){
              
              this.index++;
              
              if (this.index == this.questions.length) {
                this.el.innerText = "";
                this.fini = document.createElement("div");
                this.fini.classList.add("divPointage")
                this.el.appendChild(this.fini);
                
                this.pointage = document.createElement("p");
                this.pointage.innerText = "Pointage: ";
                this.fini.appendChild(this.pointage);
                
                this.finiP2 = document.createElement("p");
                this.finiP2.innerText = this.score + " / " + this.questions.length;
                this.pointage.appendChild(this.finiP2);

                
              }
                            
              
              this.setVisible(this.index);                    

            }           
          });    
      });      
  }

  correct() {
    this.score++;              

              animWrapper.style.display = "block";       

              var animation = gsap.fromTo('.anim-bonne-rep', 
                    { scale: 0 },
                    { scale: 1,
                      duration: 1.5,
                      ease:Power4.easeOut}
                    );
              
              var animationVert = gsap.fromTo('.rond-vert',
                    { rotationY: 0},
                    { rotationY: -720,
                      duration: 2,
                      ease:Power4.easeOut }
                  );
              
              var animationYeah = gsap.fromTo('.yeah', 
                    { fontSize: 0,
                      opacity: "100%"},
                    { fontSize: 100,
                      opacity: "0%",
                      delay: 0.5,
                      duration: 2,
                      ease:Power4.easeOut }
                    );
              
              var animationPunk = gsap.fromTo('.punk-bon', 
                    { scale: 0,
                      rotation: 0},
                    { scale: 1,
                      delay: 0.7,
                      rotationZ: 1080,
                      duration: 1, 
                      ease:Power4.easeOut}
                    );
                
              var disparition = gsap.fromTo('.anim-bonne-rep',
                    { scale: 1,
                      rotation: 0},
                    { scale: 0,
                      rotation: -1080,
                      delay:3,
                      duration: 0.5,
                      onComplete: fini}
                );
                  
              function fini() {
                animWrapper.style.display = "none";
                };
  }

  bad(){

      
  animationWrapper.style.display = "block";
  
  gsap.from('.animation', 
    { scale: 0,
     duration: 1.5,
     ease:Power4.easeOut
     }
    );

  gsap.from('.cercle', 
    { rotationX: -500,
     duration: 2,
     ease:Power4.easeOut }
  );
  

  gsap.from('.perso', 
    { scale: 0,
     delay: 0.5,
     rotationZ: -500,
     duration: 2, 
     ease:Power4.easeOut}
    );
   
  var disparaitre = gsap.to('.animation-disparition',
      { delay:3,
        scale:0,
        rotation: 360,
        duration: 0.5,
        onComplete: fini
  });

  function fini() {
    animWrapper.style.display = "none";
    };
    
  }
};





