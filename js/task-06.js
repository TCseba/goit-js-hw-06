// Selectăm elementul input din DOM
const validationInput = document.querySelector('#validation-input');

// Funcția pentru validarea lungimii input-ului
const validateInputLength = event => {
  // Obținem lungimea necesară din atributul data-length
  const requiredLength = Number(validationInput.dataset.length);
  // Obținem lungimea actuală a valorii introduse
  const inputLength = event.target.value.trim().length;

  // Adăugăm sau eliminăm clasele 'valid' și 'invalid' în funcție de lungimea input-ului
  if (inputLength === requiredLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
};

// Adăugăm evenimentul blur pe elementul validationInput
validationInput.addEventListener('blur', validateInputLength);
