'use strict';

(() => {
  console.log('calc.js file was loaded');
  // locali erdve ir nei vienas kintamasis cia sukurtas nebus globalus

  // taikomes
  const els = {
    calcForm: document.getElementById('calcForm'),
    num1: document.getElementById('num1'),
    operation: document.getElementById('operation'),
    num2: document.getElementById('num2'),
  };
  console.log('els ===', els);
  // dedam formai pateikimo pasiklausyma
  els.calcForm.addEventListener('submit', (formSubmitEvent) => {
    // sustabdyti forma nuo psl perkrovimo
    // mes valdysim forma su javascipt
    formSubmitEvent.preventDefault();
    console.log('submit');
    // paimti ivesties reikmess is abieju inputu
    const firstNum = els.num1.value;
    const secondNum = els.num2.value;

    // paimti operacijos reikme is seleto
    const operValue = els.operation.value;
    console.log(firstNum, operValue, secondNum);
    // priklausomai nuo operacijos atlikti veiksma

    switch (operValue) {
      case '*':
        console.log('vyksta daugyba');
        const rez = firstNum * secondNum;
        console.log('rez ===', rez);
        break;
    }
    // pateikti atsakyma htmle
  });
})();
