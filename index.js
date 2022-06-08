const display = document.getElementById('idCounter')
var plus1Btn = document.getElementById('idMainBtn')
var multi_1 = document.getElementById('idButton1')
var multi_2 = document.getElementById('idButton2')
var multi_3 = document.getElementById('idButton3')
var display_stock_terre = document.getElementById('idNombreBonus1')

var display_stock_lune = document.getElementById('idNombreBonus2')
var display_stock_mars = document.getElementById('idNombreBonus3')
var display_price_terre = document.getElementById('price1')
var display_price_lune = document.getElementById('price2')
var display_price_mars = document.getElementById('price3')
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

var pointsPerClick = 0;



// function on main button
function oneHandler(){

// check if multi available
let bonus1 = document.querySelector('.bonus1')
let imageEarth = document.querySelector('.imageEarth')
if (counter_1==3)
{
    let span1 = document.createElement('span');
    let text1 = document.createTextNode('you cant click');
    span1.appendChild(text1)
    bonus1.appendChild(span1)
    span1.style.backgroundColor = 'red'
    span1.style.padding= "2px 7px" ;
    imageEarth.classList.add('img-nonColor')
    
}

let imageMoon = document.querySelector('.imageMoon')
let bonus2 = document.querySelector('.bonus2')
if (counter_2==3)
{
    let span2 = document.createElement('span');
    let text2 = document.createTextNode('you cant click');
    span2.appendChild(text2)
    bonus2.appendChild(span2)
    span2.style.backgroundColor = 'red'
    span2.style.padding= "2px 7px"
    imageMoon.classList.add('img-nonColor')

}

let imageVenus = document.querySelector('.imageVenus')
let bonus3 = document.querySelector('.bonus3')
if (counter_3==3)
{
    let span3 = document.createElement('span');
    let text3 = document.createTextNode('you cant click');
    span3.appendChild(text3)
    bonus3.appendChild(span3)
    span3.style.backgroundColor = 'red'
    span3.style.padding= "2px 7px"
    imageVenus.classList.add('img-nonColor')
}

// get points
if (multi_1 == true && multi_2 == true && multi_3 == true)
{
    total = counter_1*2 + counter_2*5 + counter_3*10 + total; 
    console.log (pointsPerClick);
    display.innerHTML = total;
}
else if (multi_1 == true && multi_2 == true)
{
    total = counter_1*2 + counter_2*5 + total; 
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
else if (multi_3 == true)   
{
    total = counter_3*10+total; 
    console.log (pointsPerClick);
    display.innerHTML = total;
}
else
{
    total += 1;
    console.log (pointsPerClick);
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
    stock_terre--;
    display_stock_terre.innerHTML = `Stock x${stock_terre}`
    display_price_terre.innerHTML = `${counter_price_1*15}` 
}})

// function mutliplicateur_2
multi_2.addEventListener('click',()=>{
    if(total>=100*counter_price_2){
    total-=100*counter_price_2;
    counter_price_2++;
    counter_2++;
    pointsPerClick = pointsPerClick+5;
    multi_2 = true;
    display.innerHTML = total;
    stock_lune--;
    display_stock_lune.innerHTML = `Stock x${stock_lune}`
    display_price_lune.innerHTML = `${counter_price_2*100}`
    // if (stock_lune==2){
    //     multi_2.setAttribute('desabled', '')            
    //     multi_2.style.backgroundColor = 'red';
    //     multi_2.style.color='white' ;
    //     multi_2.innerHTML = 'you can not use'
    // }
}})

// function mutliplicateur_3
multi_3.addEventListener('click',()=>{
    if(total>=300*counter_price_3){
    total-=300*counter_price_3;
    counter_price_3++;
    counter_3++;
    pointsPerClick = pointsPerClick+10;
    multi_3 = true;
    display.innerHTML = total;
    stock_mars--;
    display_stock_mars.innerHTML = `Stock x${stock_mars}`
    display_price_mars.innerHTML = `${counter_price_3*300}`
}})

// auto Click
var idButton4 = document.getElementById('idButton4')
idButton4.addEventListener('click' ,()=> {
    if(total >= 500){
        total -= 500;
        var time = setInterval(function () {
            total +=  pointsPerClick;
            console.log (pointsPerClick);
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


// test display when unlocked
