// Variabila ce stochează valoarea curentă a contorului
let counterValue = 0;

// Selectăm elementele din DOM
const valueElement = document.querySelector('#value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

// Funcția pentru incrementarea valorii contorului
const increment = () => {
  counterValue += 1;
  valueElement.textContent = counterValue;
};

// Funcția pentru decrementarea valorii contorului
const decrement = () => {
  counterValue -= 1;
  valueElement.textContent = counterValue;
};

// Adăugăm evenimentele click pe butoane
incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);
