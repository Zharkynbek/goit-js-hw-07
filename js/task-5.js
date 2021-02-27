const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output')
}

function onInputChange(event) {
    refs.nameLabel.textContent = event.currentTarget.value
}

refs.input.addEventListener('input', onInputChange)
