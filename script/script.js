'use strict'
const footer = document.querySelector('.footer');
const button = document.querySelector('.container__button');
const myRandomNumber = getRandomNumber(100);
const count = document.querySelector('.header__count');
let accinput = 0;
let accadd = 0;
console.log(`Mi número aleatorio es ${myRandomNumber}`);


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function saveInput() {
    const selector = document.querySelector('.contaier__input').value;
    const receiver = parseInt(selector);
    accinput = receiver;
    console.log(accinput);
    return accinput
}

function compare() {
    if (accinput === myRandomNumber){
    footer.innerHTML = 'Felicidades has Ganado..... le has dado de lleno :D';
    }else if (accinput < myRandomNumber && accinput == (myRandomNumber - 1)) {
    footer.innerHTML = 'Tas a pique ;)';
    }else if (accinput < myRandomNumber) {
    footer.innerHTML = 'Tu numero es menor';
    }else if (accinput > myRandomNumber && accinput == (myRandomNumber + 1)) {
    footer.innerHTML = 'Tas a pique ;)';
    }else if (accinput > myRandomNumber) {
    footer.innerHTML = 'Tu numero es mayor';
    }
}

function addToTheCounter() {
    accadd += 1
    return count.innerHTML = accadd;
}

function allOfThem() {
    saveInput();
    compare();
    addToTheCounter();
}

button.addEventListener('click', allOfThem);





  
  

