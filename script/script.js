/* Mi primer juego java script xD */
'use strict'

const footerAttemptsItem = document.querySelector('.footer__attempts--item');
const footerAttempts = document.querySelector('.footer__attempts');
const count = document.querySelector('.footer__attempts--counter');
const footerText = document.querySelector('.footer__clue--text');
const button = document.querySelector('.container__button');
const footerImgWin = document.querySelector('.footer__img--item');
const containeReset = document.querySelector('.reset');
const footerImgSize = document.querySelector('.footer__img')
let myRandomNumber = getRandomNumber(100);
const footerImg = document.querySelector('.footer__clue--img');
const footer = document.querySelector('.footer');
let accinput = 0;
let accadd = 0;
console.log(`Mi número aleatorio es ${myRandomNumber}`);

function addToTheCounter() {
    accadd += 1
    return count.innerHTML = accadd;
}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function saveInput() {
    const selector = document.querySelector('.container__input').value;
    const receiver = parseInt(selector);
    accinput = receiver;
    return accinput
}

function compare() {
    if (accinput === myRandomNumber && accadd === 1){
        footerAttempts.classList.add('displayNone');
        footerImg.classList.add('displayNone');
        footerImgWin.src = './assets/win.svg';
        footerText.innerHTML = `¡Ganaste con ${ accadd } intento!`;
        footerText.classList.remove('footer__clue--text');
        footerText.classList.add('footer__clue--win');

    }else if (accinput === myRandomNumber  ){
        footerText.innerHTML = `¡Ganaste con ${ accadd } intentos!`;
        footerAttempts.classList.add('displayNone');
        footerImg.classList.add('displayNone');
        footerImgWin.src = './assets/win.svg';
        footerText.classList.remove('footer__clue--text');
        footerText.classList.add('footer__clue--win');
       
    }else if (accinput < myRandomNumber && accinput == (myRandomNumber - 1)) {
        footerImg.classList.remove('displayNone');
        footerText .innerHTML = 'Estas a uno de Ganar';
        
    }else if (accinput < myRandomNumber) {
        footerImg.classList.remove('displayNone');       
        footerText .innerHTML = 'Pista: el numero que has escrito es "menor" al de donato';

    }else if (accinput > myRandomNumber && accinput == (myRandomNumber + 1)) {
        footerImg.classList.remove('displayNone'); 
        footerText .innerHTML = 'Estas a uno de Ganar';

    }else if (accinput > myRandomNumber) {
        footerImg.classList.remove('displayNone');  
        footerText .innerHTML = 'Pista: el numero que has escrito es "Mayor" al de Donato';

    }else if (isNaN( accinput )) {
        footerImg.classList.remove('displayNone');  
        footerText .innerHTML = 'Debes colocar solo numeros';
    }
}

function handLeReset() {
    let selector = document.querySelector('.container__input');
    console.log(`Mi número aleatorio es ${myRandomNumber}`);
    selector.value = "";
    myRandomNumber = getRandomNumber(100);
    count.innerHTML = 0;
    accinput = 0;
    accadd = 0;
    footerImgWin.src = 'https://cdn.zeplin.io/603cf07e815ced8f2d373c92/assets/BA8DBD92-771B-4C8C-9389-83D22BD132CF.png';
    footerText.classList.remove('footer__clue--win');
    footerText.classList.add('footer__clue--text');
    footerText.innerHTML = ``;
    footerAttempts.classList.remove('displayNone')
    footerImg.classList.add('displayNone');
}



function allOfThem() {
    addToTheCounter();
    saveInput();
    compare();
}

button.addEventListener('click', allOfThem);
containeReset.addEventListener('click', handLeReset)






  
  


