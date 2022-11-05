
const controlsEL = document.querySelector('#controls')
const inputEl = controlsEL.querySelector('#controls input')
const createEl = controlsEL.querySelector('[data-create]')
const destroyEl = controlsEL.querySelector('[data-destroy]')
const boxForBoxes = document.querySelector('#boxes')

createEl.addEventListener('click', createBoxes)
destroyEl.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
	  amount = inputEl.value
    const fragment = document.createDocumentFragment()
    for (let i = 0; i < amount; i += 1) {
    let sizes = 30 + i * 10
    const newBox = document.createElement('div')
      newBox.style.backgroundColor = getRandomHexColor()
      newBox.style.width = `${sizes}px`
      newBox.style.height = `${sizes}px`
    fragment.appendChild(newBox)
    console.log(sizes)
    }
  
  boxForBoxes.appendChild(fragment)
}

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

  function destroyBoxes() {
	  boxForBoxes.textContent = ''
	  inputEl.value = ''
}

