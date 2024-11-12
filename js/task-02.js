// Matricea cu ingredientele
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Selectăm lista ul#ingredients
const ingredientsList = document.querySelector('#ingredients');

// Creăm un array pentru a stoca elementele <li>
const items = ingredients.map(ingredient => {
  // Creăm un element <li>
  const li = document.createElement('li');
  
  // Adăugăm numele ingredientului ca text
  li.textContent = ingredient;
  
  // Adăugăm clasa item
  li.classList.add('item');
  
  // Returnăm elementul <li>
  return li;
});

// Inserăm toate elementele <li> în lista ul#ingredients dintr-o singură operație
ingredientsList.append(...items);
