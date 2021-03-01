const inputRef = document.querySelector('#font-size-control')
const span = document.querySelector('#text')

const onColor = 'red'

function onInput(event) {
    span.style.fontSize = `${event.target.value}px`
    span.style.color = onColor
}

inputRef.addEventListener('input', onInput)