const carousel = document.getElementsByClassName('carousel');
const leftbutton = document.getElementById('leftarrow');
const rightbutton = document.getElementById('rightarrow');

let currentTranslation = 0;
let toggle = 0;

function left() {
    if(toggle<carousel.length){
        currentTranslation -= 120; 
        toggle = toggle + 1;
        updateTransform();
    }
    
}

function right() {
    if(toggle>0){

        currentTranslation += 120; 
        toggle = toggle - 1;
        updateTransform();
    }
 
}

function updateTransform() {
    for (let i = 0; i < carousel.length; i++) {
        carousel[i].style.transform = `translateX(${currentTranslation}px)`;
    }
}



leftbutton.addEventListener('click', right);
rightbutton.addEventListener('click', left);

//sidebar

const sidebar = document.getElementById('sidebar');
const barbutton = document.getElementById('barbutton')
const closebutton = document.getElementById('closebutton')

function opensidebar(){
    sidebar.style.left = '0';
    
}
function closesidebar(){
    sidebar.style.left='-200px';
}

barbutton.addEventListener('click',opensidebar);
closebutton.addEventListener('click',closesidebar);

//dark mode
const dark_mode_button = document.getElementById('dark-mode-button');
let darkmode = 0;
function theme(){
    if(darkmode == 0){

        document.getElementById('dark').style.display = 'block';
        document.getElementById('light-img').style.display = 'none';
        darkmode = 1;

    }
    else{

        document.getElementById('dark').style.display = 'none';
        document.getElementById('light-img').style.display = 'block';
        darkmode = 0;
    }
}

//animation
// let constantw = 0
// let constante = 0
// let constantb = 0
// const w = document.getElementById('w')
// const e = document.getElementById('e')
// const b = document.getElementById('b')

// function wchange(){
//     if(constantw == 0){

//         w.style.transform =" rotate(45deg)";
//         constantw = 1;
//     }else{
//         w.style.transform =" rotate(0deg)";
//         constantw = 0;
//     }
// }

// function echange(){
//     if(constante == 0){

//         e.style.transform =" skewY(20deg)";
//         constante = 1;
//     }else{
//         e.style.transform =" skewY(0deg)";
//         constante = 0;
//     }
// }
// function bchange(){
//     if(constantb == 0){

//         b.style.transform =" scaleY(1.5)";
//         constantb = 1;
//     }else{
//         b.style.transform =" scaleY(1)";
//         constantb = 0;
//     }
// }