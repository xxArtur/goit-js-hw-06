
const categoriesEl = document.querySelector('#categories')

const itemEl = categoriesEl.querySelectorAll('.item')
console.log(`Number of categories: ${itemEl.length}`)

itemEl.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}`)
  console.log(`Elements: ${element.lastElementChild.children.length}`)
}); 