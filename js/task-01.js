// Selectăm lista de categorii
const categoriesList = document.querySelector('#categories');

// Selectăm toate elementele li cu clasa "item"
const items = categoriesList.querySelectorAll('.item');

// Afișăm numărul total de categorii
console.log(`Number of categories: ${items.length}`);

// Iterăm prin fiecare element li.item
items.forEach(item => {
  // Selectăm titlul categoriei (tag-ul <h2>)
  const categoryTitle = item.querySelector('h2').textContent;
  
  // Selectăm toate elementele <li> din categoria curentă
  const elements = item.querySelectorAll('ul li').length;
  
  // Afișăm titlul categoriei și numărul de elemente
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elements}`);
});
