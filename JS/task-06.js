// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector('#validation-input');
const validLength = input.getAttribute('data-length');

input.addEventListener('blur', onInputChange);

function onInputChange(event) {
  const inputValue = event.currentTarget.value.length;
  if (inputValue !== +validLength) {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
    return;
  }
  event.currentTarget.classList.remove('invalid');
  event.currentTarget.classList.add('valid');
}
