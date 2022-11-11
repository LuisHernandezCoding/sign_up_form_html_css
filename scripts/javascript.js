function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
  
  document.querySelector('.theme-name').textContent = newTheme;
}

document.querySelector('.theme-toggle').addEventListener('click', setTheme)


// now lets add class valid or error to the other inputs
// they are: first-name, last-name, email, phone-number, password, confirm-password
// we can implement this by using a function and passing the input id as a parameter
// after the user types in the input, we can check if the input is valid or not
// if it is valid, we can add the class valid to the input
// if it is not valid, we can add the class error to the input
// we can use the same function for all the inputs
// because we already have a function for them
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

// now lets add the function for the first name
function validateName(input) {
  if (input.value.length >= input.minLength && input.value.length <= input.maxLength) {
    input.classList.add('valid');
    input.classList.remove('error');
  } else {
    input.classList.add('error');
    input.classList.remove('valid');
  }
}

// now lets add the function for the email
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

// now lets add the function for the phone number
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

// now lets add the function for the password
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

// now lets add the function for the confirm password
function validateConfirmPassword(input) {
  if (input.value === document.querySelector('#password').value) {
    input.classList.add('valid');
    input.classList.remove('error');
  } else {
    input.classList.add('error');
    input.classList.remove('valid');
  }
}
