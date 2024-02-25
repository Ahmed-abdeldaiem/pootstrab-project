


// Prevent default action Handled 


let formDefaultActiom=document.getElementsByTagName('form');
// console.log(formDefaultActiom);

let submitBtn=document.getElementById('submit-btn');

// console.log(submitBtn);

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log('clicked');
});


// NAV BAR HAndle When Scroll

let mainNav= document.getElementById('Daniels-navbar');

// console.log('scroll',typeof(window.scrollY));

// console.log('scroll',typeof(window.scrollTo()));


// let scrollValue = window.screenY;


window.addEventListener('scroll',()=>{

    let scrollValue=window.scrollY;
 
    if (scrollValue >= 700) {
        // console.log('scroll more',window.scrollY);
        mainNav.classList.add('scroll-nav');
        // mainNav.classList.add('py-5');
    } else {
        mainNav.classList.remove('scroll-nav');
        // mainNav.classList.add('py-5');
        // console.log('scroll less',window.scrollY);
    }
})


// animation try 

let word1='Larry Daniels';
let word2='Designer';
let word3='Developer';



let text1 =Array.from(word1);
let text2 =Array.from(word2);
let text3 =Array.from(word3);

console.log(text1); //13
console.log(text2); //8
console.log(text3); //9

// let animationPlace=document.getElementById('animation');


let animationPlace=document.getElementById('js-select');


// animationPlace.innerHTML='LarryDaniels';

// setInterval(() => {
//     // animationPlace.innerHTML='Designer'
// }, 1500);

// setInterval(() => {
//     animationPlace.innerHTML='Developer'
// }, 4500);

// setInterval(() => {
//     animationPlace.innerHTML='Developer'
// }, 7500);

// animationPlace.innerHTML='Developer'

let time=3000;


// setInterval(() => {
    
//     animationPlace.innerHTML='Designer'


// setTimeout(() => {
// }, 3000);

// }, 1500);

// setInterval(() => {
   
    
        
        
//         setTimeout(() => {
//             animationPlace.innerHTML='Developer'
//         },4500); 
       
// }, 1500);
// setInterval(() => {
   
    
        
//         animationPlace.innerHTML='LarryDaniels'
//         setTimeout(() => {
//             console.log('start3');
//         }, 7500); 
       
// }, 1500 );



let htmlContent='';





