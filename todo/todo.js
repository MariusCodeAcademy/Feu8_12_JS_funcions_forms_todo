'use strict';
console.log('todo.js file was loaded');

const mainTodosArr = [
  { id: 1, title: 'Do pushups', isDone: true },
  { id: 2, title: 'Do laundry', isDone: false },
  { id: 1, title: 'Go for a walk', isDone: false },
  { id: 1, title: 'Do pushups', isDone: true },
];
const todosFormEl = document.getElementById('todosForm');

// sukurti nusitaikymu objekta

// nusitaikyti i forma, ul elementa ir input elementa
const els = {
  form: document.getElementById('todosForm'),
  form1: document.forms[0],
  form2: document.forms.todosForm,
  input: document.getElementById('newTodoInput'),
  list: document.getElementById('todosList'),
};
console.log('els ===', els);

els.form.addEventListener('submit', (event) => {
  // sustabdyti forma nuo perkrovimo
  event.preventDefault();
  console.log('forma pateikiama');
  // pateikiant forma paimti ivesties lauko reiksme
  const newTodoValue = els.input.value;
  console.log('newTodoValue ===', newTodoValue);
  const newEl = makeLiEl(newTodoValue);
});

// sukuri atskira funkcija
function makeLiEl(todoTitle) {}
// sukurti nauja li elementa su reikmes is iviesties lauko
// patalpinti saraso elemente

// sunkiau
// gauti esama elementa pagal event.target

// paspaudus ant delete mes trinsim tevini elementa

// paspaudus ant span su tekstu mes toglinsim clase .doneTodo
