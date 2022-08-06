const validationInputEl = document.querySelector('#validation-input')

validationInputEl.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === 6) {
        validationInputEl.classList.remove('invalid')
        return validationInputEl.classList.add('valid')
    }
    validationInputEl.classList.remove('valid')
    return validationInputEl.classList.add('invalid')
})