const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(storageKey);
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  const name = event.target.name;
  const value = event.target.value;
  if (name === 'email' || name === 'message') {
    formData[name] = value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formData));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Please fill in all fields before submitting the form.');
    return;
  }
  console.log(formData);
  form.reset();
  localStorage.removeItem(storageKey);
  formData = {
    email: '',
    message: '',
  };
});
