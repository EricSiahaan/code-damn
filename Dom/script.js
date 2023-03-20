// 1. querySelectorAll
// const heading = document.querySelector('#hello')

// heading.innerText = 'Hello Mehul'


// console.log(heading)

// 2. querySelectorAll

// const heading = document.querySelectorAll('.hello')
// heading.innerText = 'Hello World'

// const allListItems = document.querySelectorAll('ul li')

// for (let i = 0; i < allListItems.length; i++) {
//     const listItem = allListItems[i]
//     listItem.innerText = "hohohoho"
// }

// console.log(allListItems)

//3. eventListener

const increamentBtn = document.querySelector('#increament')
const decreamentBtn = document.querySelector('#decreament')
const counterEl = document.getElementById('counter')

const ulElement = document.getElementById('list-items')

let counter = 0

function increamentCounter() {
    counter++
    counterEl.innerText = counter

    //create an element
    // const li = document.createElement('li')
    // const b = document.createElement('b')

    // const textNode = document.createTextNode('Ini adalah Sentence' + c)
    // b.appendChild(textNode)

    // const textNode2 = document.createTextNode(counter)
    // li.appendChild(b)
    // li.appendChild(textNode2)

    const li = document.createElement('li')

    //change style with js
    if (counter % 2 === 0) {
        // li.setAttribute('class', 'red')
        li.style.background = "red"
    } else {
        li.setAttribute('class', 'yellow')
    }

    li.setAttribute('data-counter', counter)
    li.innerHTML = '<b>Sentences </b>' + counter

    ulElement.appendChild(li)
}

function decreamentCounter() {
    // const counterEl = document.getElementById('counter')

    const li = ulElement.querySelector('[data-counter="' + counter + '"]')

    const number = parseInt(li.getAttribute('data-counter'), 10)

    // if (number % 2 === 0) {
    //     li.remove()
    // }


    li.remove()
    counter--
    counterEl.innerText = counter

}
increamentBtn.addEventListener('click', increamentCounter)
decreamentBtn.addEventListener('click', decreamentCounter)


// 4. Move On Travesing

// const heading = document.querySelectorAll('.hello')
// heading.innerText = 'Hello World'

// const allListItems = document.querySelectorAll('ul li')

// for (let i = 0; i < allListItems.length; i++) {
//     const listItem = allListItems[i]
//     listItem.innerText = "hohohoho"
// }

// // const para = document.querySelector('#para')
// // const para2 = document.getElementById('para')

// const ul = document.querySelector('ul')
// const li = ul.querySelector('li')

// console.log(allListItems)