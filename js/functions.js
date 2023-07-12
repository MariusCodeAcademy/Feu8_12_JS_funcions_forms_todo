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
const mainEl = document.getElementById('main');
const name1 = 'James';

function makeEl(destination, text, newClass = '', tagName = 'p') {
  // sukurti html elementa 'p'
  const newElement = document.createElement(tagName);

  // prideti jam klase 'special'
  newElement.className = newClass;
  // prideti jam tekta "i am new el"
  newElement.textContent = text;
  // patalpinti ji div su id 'app'
  destination.append(newElement);

  return newElement;
}
// debugger;
makeEl(appEl, name1, 'blue', 'h2');
makeEl(mainEl, 'was in 007 movie');
makeEl(appEl, 'Bond', '', 'h1');
// padaryti kad tai vyktu su funkcija

// makeEl turetu grazinti naujai sukurta elementa
/* sukurti tokia struktura ir pataplinti i <div id="main"></div> elementa
<article>
  <h2 class="main">Title</h2>
  <p class="text">I am text</p>
</article>
*/
const newArtEl = makeEl(mainEl, '', '', 'article');
console.log('newArtEl ===', newArtEl);
makeEl(newArtEl, 'Title', 'main', 'h2');
makeEl(newArtEl, 'I am text', 'text');
