const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const liEL = ingredients.map((element) => {
  const addliEl = document.createElement("li");
  addliEl.textContent = element;
  addliEl.classList.add('item')
  list.append(addliEl);
  console.log(addliEl);
})

console.log(list);
