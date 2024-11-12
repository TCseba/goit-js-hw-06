// Selectăm elementele din DOM
const changeColorButton = document.querySelector('.change-color');
const colorDisplay = document.querySelector('.color');

// Funcția pentru generarea unei culori hexadecimale random
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Funcția pentru schimbarea culorii de fundal și afișarea valorii
const changeBackgroundColor = () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorDisplay.textContent = newColor;
};

// Adăugăm evenimentul click pe butonul changeColorButton
changeColorButton.addEventListener('click', changeBackgroundColor);
