// const inputRef = document.querySelector('#validation-input');

// const validNumber = inputRef.getAttribute('data-length')

// const onInputChange = function (event) {
//     if (event.target.value.length === Number(validNumber)) {
//         inputRef.classList.add('valid')
//         inputRef.classList.remove('invalid')
//     } else {
//         inputRef.classList.add('invalid')
//         inputRef.classList.remove('valid')
//     }
// }

// inputRef.addEventListener('change', onInputChange)




const inputRef = document.querySelector('#validation-input')

const validNumber = inputRef.getAttribute('data-length')

function onInput(event) {
    if (event.currentTarget.value.length === Number(validNumber)) {
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid')
    } else {
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid')
    }
}

inputRef.addEventListener('change', onInput)
