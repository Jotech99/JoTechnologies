

// ================= SECTIONS ACTIVE =================== //

const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control'); 
const allSections = document.querySelector('.main-content');

function pageTransitions(){
  //Button click active class
  for(let i =0; i < sectBtn.length; i++){
     sectBtn[i].addEventListener('click', function(){
        let currentBtn = document.querySelectorAll('.active-btn');
        currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
        this.className += ' active-btn';  //this is referring to this function
     });
  }
 //Adding the Active Class to the section 
 //Section Active Class forEach looping for whatever inside the body e for the event
 allSections.addEventListener('click',(e)=>{
    // console.log(e.target);
    const id = e.target.dataset.id; //dataset is refferring to whatever element have clicked on so we target it exp data-id="home"
    if(id){
        //remove selected from the other btns forEach button
          sectBtn.forEach((btn)=>{
               btn.classList.remove('active');
       });

        e.target.classList.add('active');
        
        //hide other sections
        sections.forEach((section)=>{
            section.classList.remove('active');
        });
        
        const element  = document.getElementById(id);
        element.classList.add('active');
    }
 });

 //Toggle Theme
 const themeBtn = document.querySelector('.theme-btn');
 themeBtn.addEventListener('click',() =>{
      let themeIcon = document.getElementById("theme-icon");
      themeIcon.classList.toggle("fa-moon");
      themeIcon.classList.toggle("fa-sun");
      // console.log("clciked");
      let element = document.body;
      // toggle the class element which is the body
      element.classList.toggle('light-mode');
 });


  
}



pageTransitions();

