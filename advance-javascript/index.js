// // const timer = document.querySelector('#time span')

// // setInterval(() => {
// //     timer.innerText = new Date().toLocaleString()
// // }, 1000)

// // function getMeAPromise () {
// //     return fetch('http://is920398u012--202-3.com')
// // }

// // const promise = getMeAPromise()

// // promise.then(result=> {
// //     console.log(result)
// // })

// // console.log(promise)

// // .Then .Catch

// // function getMeAPromise () {
// //     return fetch('./data.json')
// // }

// // const promise = getMeAPromise() 

// // promise.then((data) => {
// //     console.log('Got  Something', data)
// // }).catch ((error) => {
// //     console.log('Promise Failed', error)
// // })

// // console.log(promise)

// //nesting
// const fetch = require("node-fetch");
// function getMeAPromise () {
//     return fetch('https://dummyjson.com/products/1')
// }

// const promise = getMeAPromise() 

// // promise.then((data) => {
// //     console.log('Got  Something', data)
// //     data.json().then(data2 => {
// //         console.log(data2 )
// //     })

// promise.then((data) => {
//     console.log('Passed 1')
// }).then((data2) =>{
//     console.log('Passed 2')
// }).then((r) => {
//     console.log('Passed 3')
//     throw new Error('ypooo')
// }).then((es) => {
//     console.log('Passed 4')
// }).catch (error => {
//     console.log('oops, Error')
// }).then((res) => {
//     console.log('passed 5')
    
// })
// console.log(promise)


//Callback Promise
const timer = document.querySelector('#time-span')
setTimeout(() => {
    timer.innerHTML = 'Hello There'
}, 1000) 


function promiseSetTimeout() {
    return new Promise ((resolve, reject) => {
        reject(100)
    })
}

console.log(promiseSetTimeout())