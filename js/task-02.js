const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementLi = new DocumentFragment();

for (let liEl of ingredients) { 
  let item = document.createElement('li');
  item.innerHTML = liEl;
  elementLi.append(item);
}

const listEl = document.querySelector('#ingredients');
listEl.append(elementLi);


