
const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')

inputEl.addEventListener('input', (event) => {
    const newUserName = event.currentTarget.value

    if (newUserName === '') {
      return outputEl.textContent = 'Anonymous';
    }
    outputEl.textContent = newUserName;
})