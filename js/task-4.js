const counterRef = document.querySelector('#value')


const incrementBtnRef = document.querySelector('button[data-action="increment"]')
const decrementBtnRef = document.querySelector('button[data-action="decrement"]')

let counterValue = 0;

function increment() {
    counterValue += 1
    counterRef.textContent = counterValue
}

function decrement() {
    counterValue -= 1
    counterRef.textContent = counterValue
}

incrementBtnRef.addEventListener('click', increment)
decrementBtnRef.addEventListener('click', decrement)
