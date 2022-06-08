const display = document.getElementById('idCounter')
var plus1Btn = document.getElementById('idMainBtn')
var multi_1 = document.getElementById('idButton1')
var multi_2 = document.getElementById('idButton2')
var multi_3 = document.getElementById('idButton3')
var display_stock_terre = document.getElementById('idNombreBonus1')
var display_stock_lune = document.getElementById('idNombreBonus2')
var stock_terre = 3;
var stock_lune = 3;
var stock_mars = 3;

var total = 0;

plus1Btn.addEventListener('click', oneHandler)

let counter_1 = 0;
let counter_2 = 0;
let counter_3 = 0;
let counter_price_1 = 1;
let counter_price_2 = 1;
let counter_price_3 = 1;

var pointsPerClick = 1;



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
    total += pointsPerClick;
    display.innerHTML = total;
}}
    



// function mutliplicateur_1
multi_1.addEventListener('click',()=>{
    if(total>=15*counter_price_1){
    total-=15*counter_price_1;
    counter_price_1++;
    counter_1++;
    pointsPerClick = pointsPerClick+1;
    multi_1 = true;
    display.innerHTML = total;
    stock_terre--;
    display_stock_terre.innerHTML = `Stock x${stock_terre}`
}})

// function mutliplicateur_2
multi_2.addEventListener('click',()=>{
    if(total>=100*counter_price_2){
    total-=100*counter_price_2;
    counter_price_2++;
    counter_2++;
    pointsPerClick = pointsPerClick+4;
    multi_2 = true;
    display.innerHTML = total;
    stock_lune--;
    display_stock_lune.innerHTML = `Stock x${stock_lune}`
    if (stock_lune==2){
        multi_2.setAttribute('desabled', '')            
        multi_2.style.backgroundColor = 'red';
        multi_2.style.color='white' ;
        multi_2.innerHTML = 'you can not use'
    }
}})

// function mutliplicateur_3
multi_1.addEventListener('click',()=>{
    if(total>=300*counter_price_3){
    total-=300*counter_price_3;
    counter_price_3++;
    counter_3++;
    pointsPerClick = pointsPerClick+9;
    multi_3 = true;
    display.innerHTML = total;
    stock_mars--;
    display_stock_mars.innerHTML = `Stock x${stock_mars}`
}})

// auto Click
var idButton4 = document.getElementById('idButton4')
idButton4.addEventListener('click' ,()=> {
    if(total >= 500){
        total -= 500;
        var time = setInterval(function () {
            total +=  pointsPerClick;
            display.innerHTML = total
        }, 1000);
    }
    
})

// Bonus 30 
var container = document.querySelector('.container-timer')
var timerBonus = document.querySelector('.reverse-timer');
var idBonus5 = document.getElementById('idBonus5')
var secoundCount = document.querySelector('.secound-count')

idBonus5.addEventListener('click', ()=> {
    container.classList.remove('desabled')
    timerBonus.classList.remove('desabled')
    
    var text = ['29 s', '28 s' , '27 s' , '26 s' , '25 s' , '24 s', '23 s', '22 s','21 s','20 s','19 s','18 s', '17 s' , '16 s' ,'15 s','14 s','13 s', '12 s', '11 s' , '10 s' , '9 s','8 s','7 s','6 s', '5 s', '4 s', '3 s', '2 s', '1 s',''];
    var counter = 0;
    var inst = setInterval(change, 1000);
    function change(){
        secoundCount.innerHTML = text[counter];
        counter++;
        if (counter >= text.length) { 
            counter = 0;
            clearInterval(inst); 
        }
    pointsPerClick = pointsPerClick * 2;

    }
        var desableContainerTimer = setInterval(desable, 30000)
        function desable(){
            container.classList.add('desabled')
        }
        // clearInterval(desableContainerTimer)
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