const categoryRef = document.querySelector('#categories')
const categoryItems = categoryRef.querySelectorAll('.item')

console.log(`Here is ${categoryItems.length} categories`);

categoryItems.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}. Quantity of elements: ${el.querySelectorAll('li').length}`);
})