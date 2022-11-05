const validationInputEl = document.querySelector('#validation-input')
const dtLength = validationInputEl.getAttribute('data-length');
const dataLength = parseFloat(dtLength)
validationInputEl.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length == dataLength) {
      validationInputEl.classList.remove('invalid')
      validationInputEl.classList.add('valid')
      return 
    }
    validationInputEl.classList.remove('valid')
    validationInputEl.classList.add('invalid')
})
