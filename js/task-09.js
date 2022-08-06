
const buttonChangeColorEl = document.querySelector('.change-color')
const textColorEl = document.querySelector('.color')

buttonChangeColorEl.addEventListener('click', getRandomHexColor)

function getRandomHexColor() {
	textColorEl.textContent = getColor();
  document.body.style.backgroundColor =
    textColorEl.textContent
};

function getColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`
    .padStart(6, 0)
};
