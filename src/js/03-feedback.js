import throttle from 'lodash.throttle';
const trottle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

const storageKey = 'feedback-form-state';
const storageData = JSON.parse(localStorage.getItem(storageKey));

form.addEventListener('input', throttle(handlerOnInput, 500));

if (storageData) {
  form.elements.email.value = storageData.email;
  form.elements.message.value = storageData.message;
}

function handlerOnInput() {
  const userData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(userData));
}

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    return alert('Please fill in all fields!');
  }
  console.log(JSON.parse(localStorage.getItem(storageKey)));
  form.reset();
  localStorage.removeItem(storageKey);
}
