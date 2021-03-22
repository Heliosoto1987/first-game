/* Mi primer juego javascript xD */
"use strict";
const footer = document.querySelector(".footer__clue--text");
const button = document.querySelector(".container__button");
const containeReset = document.querySelector(".reset");
let myRandomNumber = getRandomNumber(100);
const count = document.querySelector(".footer__attempts--counter");
const footerImg = document.querySelector(".footer__clue--img");
let accinput = 0;
let accadd = 0;
console.log(`Mi número aleatorio es ${myRandomNumber}`);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function saveInput() {
  const selector = document.querySelector(".container__input").value;
  const receiver = parseInt(selector);
  accinput = receiver;
  return accinput;
}

function compare() {
  if (accinput === myRandomNumber) {
    footerImg.classList.remove("displayNone");
    footer.innerHTML =
      "Felicidades has Ganado..... le has dado de lleno :D el numero era: " +
      myRandomNumber;
  } else if (accinput < myRandomNumber && accinput == myRandomNumber - 1) {
    footerImg.classList.remove("displayNone");
    footer.innerHTML = "Estas a uno de Ganar";
  } else if (accinput < myRandomNumber) {
    footerImg.classList.remove("displayNone");
    footer.innerHTML =
      'Pista: el numero que has escrito es "menor" al de donato';
  } else if (accinput > myRandomNumber && accinput == myRandomNumber + 1) {
    footerImg.classList.remove("displayNone");
    footer.innerHTML = "Estas a uno de Ganar";
  } else if (accinput > myRandomNumber) {
    footerImg.classList.remove("displayNone");
    footer.innerHTML =
      'Pista: el numero que has escrito es "Mayor" al de Donato';
  } else if (isNaN(accinput)) {
    footerImg.classList.remove("displayNone");
    footer.innerHTML = "Debes colocar solo numeros";
  }
}

function handLeReset() {
  let selector = document.querySelector(".container__input");
  selector.value = "";
  myRandomNumber = getRandomNumber(100);
  count.innerHTML = 0;
  accinput = 0;
  accadd = 0;
  footer.innerHTML = 'Escribe un numero y dale a "Prueba"';
  console.log(`Mi número aleatorio es ${myRandomNumber}`);
}

function addToTheCounter() {
  accadd += 1;
  return (count.innerHTML = accadd);
}

function allOfThem() {
  saveInput();
  compare();
  addToTheCounter();
}

button.addEventListener("click", allOfThem);
containeReset.addEventListener("click", handLeReset);
