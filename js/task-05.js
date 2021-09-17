// Напиши скрипт который, при наборе текста в инпуте input#name-input 
// (событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.


// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>


let inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', onInputChange);

let outputEl = document.querySelector('#name-output');

function onInputChange(event) {
    inputEl = event.currentTarget.value;
    console.log(inputEl);

    outputEl.textContent = event.currentTarget.value || 'незнакомец';
};