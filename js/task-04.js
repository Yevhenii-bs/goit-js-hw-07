// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let valueEL = Number(document.querySelector('#value').textContent);

const counterValue = document.querySelector('#value');

const decrBtn = document.querySelector('#counter').firstElementChild;
const incrBtn = document.querySelector('#counter').lastElementChild;

incrBtn.addEventListener('click', event => {
    // console.log("Вешаю слушателя события на целевую кнопку");
    valueEL += 1;

    counterValue.innerText = valueEL;
});

decrBtn.addEventListener('click', event => {
    valueEL -= 1;

    counterValue.innerText = valueEL;
});