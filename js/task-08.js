// Selectăm formularul din DOM
const loginForm = document.querySelector('.login-form');

// Funcția pentru gestionarea trimiterii formularului
const handleFormSubmit = event => {
  // Prevenim reîncărcarea paginii
  event.preventDefault();

  // Colectăm elementele formularului
  const {
    elements: { email, password }
  } = event.currentTarget;

  // Verificăm dacă câmpurile sunt completate
  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('All fields must be filled out!');
    return;
  }

  // Colectăm valorile câmpurilor într-un obiect
  const formData = {
    email: email.value,
    password: password.value
  };

  // Afișăm obiectul cu datele introduse în consolă
  console.log(formData);

  // Resetăm formularul
  event.currentTarget.reset();
};

// Adăugăm evenimentul submit pe formularul loginForm
loginForm.addEventListener('submit', handleFormSubmit);
