'use strict';
console.log('helper.js file was loaded');

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
