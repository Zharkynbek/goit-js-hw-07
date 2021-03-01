// const valueRef = document.querySelector('#value')

// const iBtnRef = document.querySelector('button[data-action="increment"]')
// const dBtnRef = document.querySelector('button[data-action="decrement"]')

// let counterValue = 0;

// function increment() {
//     counterValue += 1
//     valueRef.textContent = counterValue
//     valueRef.style.color = 'black'
// }

// function decrement() {
//     counterValue -= 1
//     valueRef.textContent = counterValue
//     valueRef.style.color = 'red'
// }

// iBtnRef.addEventListener('click', increment)
// dBtnRef.addEventListener('click', decrement)

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