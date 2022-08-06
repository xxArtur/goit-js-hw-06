const counterValue = {
    value: 0,
    increment() {
        this.value += 1
    },
    decrement() {
        this.value -= 1
    },
}

const valueEl = document.querySelector('#value')

const decrementEl = document.querySelector('button[data-action="decrement"]')
const incrementEl = document.querySelector('button[data-action="increment"]')

decrementEl.addEventListener('click', toDecrementValue)
incrementEl.addEventListener('click', toIncrementValue)

function toDecrementValue() {
    counterValue.decrement()
    valueEl.textContent = counterValue.value
}
function toIncrementValue() {
    counterValue.increment()
    valueEl.textContent = counterValue.value
}

