'use strict';
console.log('functions.js file was loaded');

// Functions
const msg1 = 'Gera diena';
const msg2 = 'Js works';

// 1. SideEffect
function say(msg) {
  console.log(msg);
}
say(msg1);
say(msg2);

// fn default argument values
// jei darkModeOn() => bgColor = '#333'
// jei darkModeOn('tomato') => bgColor = 'tomato'
function darkModeOn(bgColor = '#333') {
  // let resultColor = '#333';
  // if (bgColor) {
  //   resultColor = bgColor;
  // }

  document.body.style.backgroundColor = bgColor;
  document.body.style.color = 'snow';
}
darkModeOn('tomato');
// kai nieko nepaduodu butu #333
darkModeOn();
darkModeOn('blueviolet');

// 2. Returns value
const num1 = 50;
const num2 = 150;

const num3 = 30;
const num4 = 70;

function sum(sk1, sk2) {
  const rezult = sk1 + sk2;
  console.log('rezult ===', rezult);
  return rezult;
}
/** @param {array} numArr  */
function getArraySum(numArr) {
  const sum = numArr.reduce((total, sk) => total + sk, 0);
  console.log('sum ===', sum);
  return sum;
}
getArraySum([1, 2, 3, 4]);
let arGryzo = getArraySum([1, 2]);
console.log('arGryzo ===', arGryzo);
let gryzoGrazaIsFunkcionsVel = sum(num1, num2);
let gryzoGrazaIsFunkcionsVel1 = sum(num3, num4);
console.log('gryzoGrazaIsFunkcionsVel ===', gryzoGrazaIsFunkcionsVel);
console.log('gryzoGrazaIsFunkcionsVel1 ===', gryzoGrazaIsFunkcionsVel1);

const rezult = gryzoGrazaIsFunkcionsVel + gryzoGrazaIsFunkcionsVel1;
const rezult1 = sum(gryzoGrazaIsFunkcionsVel, gryzoGrazaIsFunkcionsVel1);
console.log('rezult ===', rezult);
console.log('rezult1 ===', rezult1);

// taikomes
const appEl = document.getElementById('app');

function makeEl() {
  // sukurti html elementa 'p'
  const pEl = document.createElement('p');
  // prideti jam klase 'special'
  pEl.classList.add('special');
  // prideti jam tekta "i am new el"
  pEl.textContent = 'i am new el';
  // patalpinti ji div su id 'app'
  appEl.append(pEl);
}
makeEl();
makeEl();
makeEl();
// padaryti kad tai vyktu su funkcija
