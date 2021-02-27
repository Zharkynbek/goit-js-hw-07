 const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients')

const products = ingredients.map(ingredient => {
   const ingredientsItemEl = document.createElement('li')
   ingredientsItemEl.textContent = ingredient
   return ingredientsItemEl
})

ingredientsRef.append(...products)