const friends = [
    {
        name: 'x',
        age: 17,
        someprop: "true"
    },
    {
        name: 'y',
        age: 18
    },
    {
        name: 'z',
        age: 19
    },
    {
        name: 'u',
        age: 16
    }
]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newMappedArray_forEq = []

for (let i = 0; i < arr.length; i++) {
    const el = arr[i]

    newMappedArray_forEq.push(el ** 2)
}

// const newMappedArray = arr.map(element => {
//     console.log(element)
//     return element ** 2
// })

const newMappedArray = arr.map(element => element ** 2)

// const filteredArray = arr.filter(element => element < 5)
const filteredArray = friends.filter(element => element.age >= 18)

const findX = friends.find(friends => friends.name === 'x')

friends.forEach(friends => {
    console.log(friends)
})

// console.log(arr, filteredArray)
console.log(findX)