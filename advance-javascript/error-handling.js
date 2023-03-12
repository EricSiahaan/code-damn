const fetch = require("node-fetch");

function promiseSetTimeout () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

async function fetchAll() {
    
    try {
        const req1 = await fetch('https://dummyjson.com/products/1')
        console.log('Yup it Work', req1)
    } catch (error) {
        console.log('Something went wrong', error)
    }
}

fetchAll()