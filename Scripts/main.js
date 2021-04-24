let modal= document.querySelector("modal-QUIZ-body");
let questionsList = [
    {
      q: "Quel était le premier nom du groupe?",
      o1: "Watoosh",
      o2: "Billy Talent",
      o3: "Pezz",
      o4: "To Each His Own",
      r: 3    
    },
    {
      q: "En quelle année le groupe a-t-il été créé?",
      o1: "1999",
      o2: "1993",
      o3: "2002",
      o4: "2004",
      r: 2
      
    },
    {
      q: "Lequel de ces albums n'appartiennent pas à Billy Talent?",
      o1: "Afraid of Heights",
      o2: "Billy Talent II",
      o3: "Billy Talent I",
      o4: "Deadly Silence",
      r: 4
      
    },
    {
      q: "De quel origine est le groupe?",
      o1: "Montréal",
      o2: "Mirabel",
      o3: "Manitoba",
      o4: "Mississauga",
      r: 4
      
    },
    {
      q: "Combien d'album le groupe a-t-il vendu à l'international?",
      o1: "Près de 3 000 000",
      o2: "Près de 1 000 000",
      o3: "Près de 500 000",
      o4: "Près de 7 000 000",
      r: 1
      
    },
    {
      q: "Où se sont rencontré les membres du groupe?",
      o1: "St. Francis Xavier Secondary School",
      o2: "Lorne Park Secondary School.",
      o3: "Our Lady of Mount Carmel Secondary School",
      o4: "The Woodlands Secondary School",
      r: 3
      
    },
    {
      q: "Billy Talent a un contrat avec Warner Music Canada",
      o1: "Vrai",
      o2: "Faux",
      r: 1
      
    },
    {
      q: "Y a-t-il eu de nouveaux membres depuis la création?",
      o1: "Non, Billy Talent n'a jamais recruté de nouveaux membres depuis 1993",
      o2: "Oui, deux nouveaux membres pour remplacer le chanteur et le guitariste originaux",
      o3: "Oui, un nouveau membre qui se spécialise DJ",
      o4: "Oui, un membre temporaire, car un des membres est en pause maladie",
      r: 4
      
    }
  ];
  
  
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
      document.body.appendChild(this.el);
      
  
      this.strongQuestion = document.createElement("strong");
      this.strongQuestion.br = document.createElement("br");
      this.strongQuestion.innerText = question.q;
      this.el.appendChild(this.strongQuestion);
      this.el.appendChild(this.strongQuestion.br);
      
      // radios buttons
       
      if(typeof question.o1 !== "undefined") {
        
        this.radio = document.createElement("input");
        this.radio.setAttribute("type", "radio");
        this.radio.setAttribute("name", "question " + index) // HOWWW DAFUQ
        this.radio.setAttribute("value", "1");
        this.el.appendChild(this.radio);
        
        this.label = document.createElement("label");
        this.label.innerText = question.o1;
        this.el.appendChild(this.label);
        
        this.radiobr = document.createElement("br");
        this.label.appendChild(this.radiobr);
      }
       
      if(typeof question.o2 !== "undefined") {
        
        this.radio = document.createElement("input");
        this.radio.setAttribute("type", "radio");
        this.radio.setAttribute("name", "question" + index ) // HOWWW DAFUQ
        this.radio.setAttribute("value", "2");
        this.el.appendChild(this.radio);      
        
        this.label = document.createElement("label");
        this.label.innerText = question.o2;
        this.el.appendChild(this.label);
        
        this.radiobr = document.createElement("br");
        this.label.appendChild(this.radiobr);
      }
      
      
      if(typeof question.o3 !== "undefined") {
        
        this.radio = document.createElement("input");
        this.radio.setAttribute("type", "radio");
        this.radio.setAttribute("name", "question" + index) // HOWWW DAFUQ
        this.radio.setAttribute("value", "3");
        this.el.appendChild(this.radio);
        
        this.label = document.createElement("label");
        this.label.innerText = question.o3;
        this.el.appendChild(this.label);
        
        this.radiobr = document.createElement("br");
        this.label.appendChild(this.radiobr);
      }
       
      
      if(typeof question.o4 !== "undefined") {
        
        this.radio = document.createElement("input");
        this.radio.setAttribute("type", "radio");
        this.radio.setAttribute("name", "question" + index ) // HOWWW DAFUQ
        this.radio.setAttribute("value", "4");
        this.el.appendChild(this.radio);
        
        this.label = document.createElement("label");
        this.label.innerText = question.o4;
        this.el.appendChild(this.label);
        
        this.radiobr = document.createElement("br");
        this.label.appendChild(this.radiobr);
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
            
              if (radioButton.value == this.questions.[this.index].r) {
                this.score++;
                console.log("Bonne reponse! Pointage: " + this.score);         
              }
              
              else {
                console.log("Mauvaise réponse. Pointage: " + this.score);   
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
  };
  
  
  
  var quizz = new Quiz(questionsList);

  