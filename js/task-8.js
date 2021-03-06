const inputRef = document.querySelector('#controls > input')

const renderRef = document.querySelector('button[data-action="render"]')
const destroyRef = document.querySelector('button[data-action="destroy"]')

const divRef = document.querySelector('#boxes')
class Component {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }

    hide() {
        this.element.style.display = 'none'
    }

    show() {
        this.element.style.display = 'block'
    }

    change(color) {
        this.element.style.backgroundColor = color
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)
        this.element.style.width = options.size + 'px'
        this.element.style.height = options.size + 'px'
        this.element.style.borderRadius = options.borderRadius
        this.element.style.backgroundColor = options.color
    }
}


const obj = {
    arr: []
}

function createBoxes() {
    const boxesValue = +inputRef.value
    let boxSize = 30
    const arr = []
    divRef.innerHTML = ''
    for (let i = 0; i < boxesValue; i += 1) {
        const newDivRef = document.createElement('div')
        newDivRef.classList.add(`div${i}`)
        divRef.append(newDivRef)
        const div = new Box({
            selector: `.div${i}`,
            size: boxSize,
            color: `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`,
            borderRadius: '50%'           
        })
        obj.arr.push(div)
        
        
        boxSize += 10
    }
    
    console.log(obj.arr);
    inputRef.value = ''
    divRef.prepend(...arr)
}

renderRef.addEventListener('click', createBoxes)
destroyRef.addEventListener('click', () => divRef.innerHTML = '')