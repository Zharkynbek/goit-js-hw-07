// const inputRef = document.querySelector('#name-input')
// const nameLabel = document.querySelector('#name-output')

// function fn(e) {
//     nameLabel.textContent = e.currentTarget.value
//     nameLabel.style.color = 'red'
// }

// inputRef.addEventListener('input', fn)


  
const inputRef = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

const onInput = e => {
  e.target.value !== '' ? nameLabel.textContent = e.target.value
    : nameLabel.textContent = 'незнакомец'
  
 }
inputRef.addEventListener('input', onInput);