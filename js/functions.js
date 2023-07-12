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
function getArraySum(numArr) {
  // kad veiktu
  // atspausdinti ir grazinti suma
}
getArraySum([1, 2, 3, 4]);
getArraySum([1, 2]);
let gryzoGrazaIsFunkcionsVel = sum(num1, num2);
let gryzoGrazaIsFunkcionsVel1 = sum(num3, num4);
console.log('gryzoGrazaIsFunkcionsVel ===', gryzoGrazaIsFunkcionsVel);
console.log('gryzoGrazaIsFunkcionsVel1 ===', gryzoGrazaIsFunkcionsVel1);

const rezult = gryzoGrazaIsFunkcionsVel + gryzoGrazaIsFunkcionsVel1;
const rezult1 = sum(gryzoGrazaIsFunkcionsVel, gryzoGrazaIsFunkcionsVel1);
console.log('rezult ===', rezult);
console.log('rezult1 ===', rezult1);

// sukurti html elementa 'p'
// prideti jam klase 'special'
// prideti jam tekta "i am new el"
// patalpinti ji div su id 'app'

// padaryti kad tai vyktu su funkcija
