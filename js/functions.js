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
