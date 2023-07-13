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
  console.log('newEl ===', newEl);
  // patalpinti nauja el
  addLiElToList(newEl);
  // els.input.value = '';
  els.form.reset();
});

// sukuri atskira funkcija
// <li><span class="doneTodo">Do stuff</span> <button>X</button></li>
function makeLiEl(todoTitle) {
  // sukurti nauja li elementa su reikmes is iviesties lauko
  const newLiEl = document.createElement('li');
  const spanEl = document.createElement('span');
  spanEl.textContent = todoTitle;
  const buttonEl = document.createElement('button');
  buttonEl.addEventListener('click', deleteLiEl);
  buttonEl.textContent = 'X';
  newLiEl.append(spanEl, buttonEl);
  return newLiEl;
}
// patalpinti saraso elemente
function addLiElToList(liEl) {
  els.list.append(liEl);
}

// function to delete li
function deleteLiEl(event) {
  // console.log('event ===', event);
  console.log('delete');
  // event.target - tas elementas ant kurio paspaudem
  const btnEl = event.target;
  // console.log('btnEl ===', btnEl);
  const liEl = btnEl.parentElement;
  // console.log('liEl ===', liEl);
  liEl.remove();
}

function toggleTodo(event) {
  // isloginti ant ko paspaudem
}

// sunkiau
// gauti esama elementa pagal event.target

// paspaudus ant delete mes trinsim tevini elementa

// paspaudus ant span su tekstu mes toglinsim clase .doneTodo
