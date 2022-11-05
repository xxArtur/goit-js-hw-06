
const inputEl = document.querySelector('#name-input')
const userNameEl = document.querySelector('#name-output')

inputEl.addEventListener('input', (event) => {
    const newUserName = event.currentTarget.value

    if (!newUserName) {
      userNameEl.textContent = 'Anonymous';
    }
    userNameEl.textContent = newUserName
})

