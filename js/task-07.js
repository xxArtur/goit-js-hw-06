const fontSizeControlEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

fontSizeControlEl.addEventListener('input', (event) => {
    const size = event.currentTarget.value
    textEl.style.fontSize = size + 'px'
})