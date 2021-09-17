// Напиши скрипт, который бы при потере фокуса на инпуте,
//  проверял его содержимое на правильное количество символов.


// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.querySelector('#validation-input');
const inputLength = inputEl.dataset.length;

const input = document.querySelector('input');

inputEl.addEventListener('change', e => {
    const text = e.target.value;

    if (text.length == inputLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
            inputEl.classList.remove('valid');
            inputEl.classList.add('invalid');
    };

})

