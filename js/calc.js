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
    results: document.getElementById('results'),
  };
  console.log('els ===', els);
  // dedam formai pateikimo pasiklausyma
  els.calcForm.addEventListener('submit', (formSubmitEvent) => {
    // sustabdyti forma nuo psl perkrovimo
    // mes valdysim forma su javascipt
    formSubmitEvent.preventDefault();
    console.log('submit');
    // paimti ivesties reikmess is abieju inputu
    // .value grazins string
    const firstNumAsString = els.num1.value;
    const firstNum = Number(firstNumAsString);
    // const secondNum = +els.num2.value;
    const secondNum = els.num2.valueAsNumber;
    // console.log('typeof firstNum ===', typeof firstNum);
    // console.log('typeof secondNum ===', typeof secondNum);
    // paimti operacijos reikme is seleto
    const operValue = els.operation.value;
    console.log(firstNum, operValue, secondNum);
    // priklausomai nuo operacijos atlikti veiksma
    let rez;
    let veiksmas;
    switch (operValue) {
      case '*':
        console.log('vyksta daugyba');
        rez = firstNum * secondNum;
        veiksmas = `${firstNum} * ${secondNum}`;
        break;
      case '-':
        console.log('vyksta daugyba');
        rez = firstNum - secondNum;
        veiksmas = `${firstNum} - ${secondNum}`;
        break;
      case '/':
        console.log('vyksta daugyba');
        rez = firstNum / secondNum;
        veiksmas = `${firstNum} / ${secondNum}`;
        break;
      case '+':
        console.log('vyksta daugyba');
        rez = firstNum + secondNum;
        veiksmas = `${firstNum} + ${secondNum}`;
        break;
      default:
        console.warn('neteisinga operacija');
      //surasyti likusias operacijas
    }
    console.log('rez ===', rez);
    // pateikti atsakyma htmle
    makeEl(els.results, `${veiksmas} = ${rez}`, '', 'li');
  });
})();
