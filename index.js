const display = document.getElementById('idCounter')
var plus1Btn = document.getElementById('idMainBtn')
var multi_1 = document.getElementById('idButton1')
var multi_2 = document.getElementById('idButton2')

var total = 0;

plus1Btn.addEventListener('click', oneHandler)

let counter_1 = 0;
let counter_2 = 0;
let counter_price_1 = 1;
let counter_price_2 = 1;

var pointsPerClick = 0;



// function on main button
function oneHandler(){

// check if multi available
if (counter_1==5)
{
    body.style.display = none;
    // multi_1.style.backgroundColor = 'red';   >Work on progress
    // multi_1.style.color='white' ;
    // multi_1.innerHTML = 'you can not use'
}

if (counter_2==5)
{
    // multi_2.style.backgroundColor = 'red';    >Work on progress
    // multi_2.style.color='white' ;
    // multi_2.innerHTML = 'you can not use'
}

// get points
if (multi_1 == true && multi_2 == true)
{
    total = counter_1*2 + counter_2*5 +total; 
    
    console.log (pointsPerClick);
    display.innerHTML = total;
}
else if (multi_1 == true)
{
    total = counter_1*2 +total; 
    console.log (pointsPerClick);
    display.innerHTML = total;
}   
else if (multi_2 == true)   
{
    total = counter_2*5+total; 
    console.log (pointsPerClick);
    display.innerHTML = total;
}
else
{
    total += 1;
    display.innerHTML = total;
}}
    



// function mutliplicateur_1
multi_1.addEventListener('click',()=>{
    if(total>=15*counter_price_1){
    total-=15*counter_price_1;
    counter_price_1++;
    counter_1++;
    pointsPerClick = pointsPerClick+2;
    multi_1 = true;
    display.innerHTML = total;
}})

// function mutliplicateur_2
multi_2.addEventListener('click',()=>{
    if(total>=50*counter_price_2){
    total-=50*counter_price_2;
    counter_price_2++;
    counter_2++;
    pointsPerClick = pointsPerClick+5;
    multi_2 = true;
    display.innerHTML = total;
    if (counter_2==5){
        multi_stop.setAttribute('desabled', '')            
        multi_stop.style.backgroundColor = 'red';
        multi_stop.style.color='white' ;
        multi_stop.innerHTML = 'you can not use'
    }
}})

// auto Click
var idButton4 = document.getElementById('idButton4')
idButton4.addEventListener('click' ,()=> {
    if(total >= 500){

        var time = setInterval(function () {
            total +=  1;
            display.innerHTML = total
        }, 1000);
    }
    
})

// Bonus 30 
var container = document.querySelector('.container-timer')
var timerBonus = document.querySelector('.reverse-timer');
var idBonus5 = document.getElementById('idBonus5')
idBonus5.addEventListener('click', ()=> {
    timerBonus.classList.remove('desabled')
    container.classList.remove('desabled')
})







// bonus button
// setInterval (bonus, 30000);
// function bonus() {
//     setInterval (function(){
//     pointsPerClick = pointsPerClick*2;
//     total += pointsPerClick;
//     display.innerHTML = total;
//     },1000)
// }