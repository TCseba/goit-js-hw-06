// Selectăm elementele din DOM
const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

// Funcția pentru modificarea dimensiunii fontului
const adjustFontSize = event => {
  text.style.fontSize = `${event.target.value}px`;
};

// Adăugăm evenimentul de input pe elementul fontSizeControl
fontSizeControl.addEventListener('input', adjustFontSize);
