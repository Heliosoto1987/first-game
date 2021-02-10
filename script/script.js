/* Mi primer juego java script xD */
'use strict'

const headerImg = document.querySelector('.header__img');
const footer = document.querySelector('.footer');
const button = document.querySelector('.container__button');
const containeReset = document.querySelector('.container__reset')
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
    return accinput
}

function compare() {
    if (accinput === myRandomNumber){
    footer.innerHTML = 'Felicidades has Ganado..... le has dado de lleno :D el numero era: ' + myRandomNumber
    headerImg.classList.add('turn')
    }else if (accinput < myRandomNumber && accinput == (myRandomNumber - 1)) {
    footer.innerHTML = 'Tas a pique ;)';
    }else if (accinput < myRandomNumber) {
    footer.innerHTML = 'Pista: el numero que has escrito es "menor" al de donato';
    }else if (accinput > myRandomNumber && accinput == (myRandomNumber + 1)) {
    footer.innerHTML = 'Tas a pique ;)';
    }else if (accinput > myRandomNumber) {
    footer.innerHTML = 'Pista: el numero que has escrito es "Mayor" al de donato';
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






  
  


