// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]

// // const arr3 = [...arr1, arr2]

// const arr3 = [arr1, arr2]

// console.log(arr3)

const keyname = 'cool'

const obj1 = {
    name: 'mehul',
    keyname,
    somekey: 100
}

const obj2 = {
    name: 'john',
    age: 22
}

const obj3 = {
    ...obj1,
    ...obj2
}

console.log(obj3)