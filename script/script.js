/* Mi primer juego java script xD */
'use strict'
const headerImg = document.querySelector('.header__img');
const footer = document.querySelector('.footer');
const button = document.querySelector('.container__button');
const containeReset = document.querySelector('.reset')
let myRandomNumber = getRandomNumber(100);
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
    console.log(accinput)
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
    }else if (isNaN( accinput )) {
    footer.innerHTML = 'Debes colocar solo numeros';
    }
}

function handLeReset() {
    let selector = document.querySelector('.contaier__input')
    selector.value = '';
    myRandomNumber = getRandomNumber(100);
    count.innerHTML = 0;
    accinput = 0;
    headerImg.classList.remove('turn')
    accadd = 0;
    return 
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
containeReset.addEventListener('click', handLeReset)






  
  


