// Selectăm elementele din DOM
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Funcția pentru actualizarea textului de output
const updateNameOutput = event => {
  nameOutput.textContent = event.target.value.trim() !== '' ? event.target.value : 'Anonymous';
};

// Adăugăm evenimentul de input pe elementul nameInput
nameInput.addEventListener('input', updateNameOutput);
