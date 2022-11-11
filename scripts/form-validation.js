const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.id === 'first-name' || input.id === 'last-name') {
      validateName(input);
    } else if (input.id === 'email') {
      validateEmail(input);
    } else if (input.id === 'phone-number') {
      validatePhoneNumber(input);
    } else if (input.id === 'password') {
      validatePassword(input);
    } else if (input.id === 'confirm-password') {
      validateConfirmPassword(input);
    }
  });
});

function validateName(input) {
  if (input.value.length >= input.minLength && input.value.length <= input.maxLength) {
    input.classList.add('valid');
    input.classList.remove('error');
  } else {
    input.classList.add('error');
    input.classList.remove('valid');
  }
}

function validateEmail(input) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailRegex.test(input.value)) {
    input.classList.add('valid');
    input.classList.remove('error');
  } else {
    input.classList.add('error');
    input.classList.remove('valid');
  }
}

function validatePhoneNumber(input) {
  const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if (phoneNumberRegex.test(input.value)) {
    input.classList.add('valid');
    input.classList.remove('error');
  } else {
    input.classList.add('error');
    input.classList.remove('valid');
  }
}

function validatePassword(input) {
  const errorMsg = document.querySelector('#error-message');
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (passwordRegex.test(input.value)) {
    input.classList.add('valid');
    input.classList.remove('error');
    errorMsg.classList.add('hidden');
  } else {
    input.classList.add('error');
    input.classList.remove('valid');
    errorMsg.classList.remove('hidden');
  }
}

function validateConfirmPassword(input) {
  if (input.value === document.querySelector('#password').value) {
    input.classList.add('valid');
    input.classList.remove('error');
  } else {
    input.classList.add('error');
    input.classList.remove('valid');
  }
}