/* 1. Variable */

//let myFirstVariable = 250
// const myFirstVariable = 250

// console.log(myFirstVariable)

// myFirstVariable = 251

// console.log(myFirstVariable)


/* 2. Data type */

// const myAge = 28
// const amIAbove18 = true
// const myName = "mehul"
// const friends = [22, true, "mehul"]
// const someSpecialValue = undefined

// console.log(friends);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(someSpecialValue);

/* 3. Type of */

// const myAge = 28
// const typeofMyAge = (typeof myAge)
// //const typeofMyAge = typeof myAge


// console.log(typeofMyAge);

/* 4.Language Fundamental */

// const myAge = 22

// // myAge + 1 => wrong
// const myUpdateAge = myAge + 1

// console.log(myUpdateAge)

// const friendsAge = [20, 25, 20, 25, 20]
// const sum = friendsAge[0] + friendsAge[1] + friendsAge[2] + friendsAge[3] + friendsAge[4]
// console.log("Rata-rata usia teman", sum)

// const totalFriend = 5
// console.log("Total Teman", totalFriend)

// const average = sum / totalFriend
// console.log("Rata rata Usia teman saya", average)

/* 5.Increament Decreament */

// let myAge = 22
// myAge++
// console.log(myAge);
// myAge = myAge + 2
// // console.log(myAge);
// console.log(myAge);

/* 6.Function */

// let myAge = 22
// let sum = 200
// let totalCount = 5

// // function makeConsoleLog() {
// //     console.log("This a function test")
// //     console.log(totalCount)
// // }

// // makeConsoleLog()

// function printAllVariable() {
//     console.log('myAge', myAge)
//     console.log('mySum', sum)
//     console.log('totalcount', totalCount)
// }

// printAllVariable()

// myAge = 28

// printAllVariable()


/* 7.Function Parameters */

// let myAge = 22
// let sum = 200
// let totalCount = 5

// function addsToMyAge(IncreamentBy, multiplyBy) {
//     myAge = (myAge + IncreamentBy) * multiplyBy
// }

// addsToMyAge(5, 2)
// console.log(myAge);

/* 8.Return Statement */

// let myAge = 10
// let sum = 200
// let totalCount = 5

// // function addsToMyAge(IncreamentBy, multiplyBy) {
// //     return (myAge + IncreamentBy) * multiplyBy
// // }

// // const myNewAge = addsToMyAge(2, 2)
// //console.log(myAge, myNewAge)

// function addsToMyAge(increamentBy, multiplyBy) {
//     return sum = sum + 100
//     // return

// }

// const myNewAge = addsToMyAge(5, 2)
// console.log(sum, totalCount)

/* 9.If - Else Condition */

// let myAge = 10
// let sum = 200
// let totalCount = 5

// function showIf(age) {
//     if (age > 18) {
//         return true
//     } else {
//         return false
//     }
// }

// // showIf(20)

// console.log(showIf(20))
// console.log(showIf(20))
// console.log(showIf(12))


/* 10.Chaining If Else Test */

// function testSize(num) {
//     // Only change code below this line
//     if (num < 5) {
//         return "Tiny"
//     } else if (num < 10) {
//         return "Small"
//     } else if (num < 15) {
//         return "Medium"
//     } else if (num < 20) {
//         return "Large"
//     } else {
//         return "Huge"
//     }

//     return "Change Me";
//     // Only change code above this line
// }

// testSize(7);

/*10.Logical Operators */

// const age = 25


// function shouldGetAlicense(age, bride) {
//     if (age > 18) {
//         console.log('This Person is ABOVE 18')
//         return
//     } else {
//         if (bride > 100) {
//             console.log('you pass')
//         } else {
//             console.log('This Person is bellow 18')
//         }
//     }
// }

// shouldGetAlicense(5, 101)


// function shouldGetAlicenseV2(age, bride) {

//     if (age <= 18 && bride > 100) {
//         console.log('You Pass')
//         return
//     } else if (age > 18) {
//         console.log('This person is above 18')
//     } else (bride <= 100); {
//         console.log('This is person is bellow 18')
//     }
// }

// shouldGetAlicenseV2(20, 101)

/*10.Array */

// let myFriends = ['default']

// function addMyFriends(friend) {
//     myFriends.unshift(friend)
//     console.log(myFriends)
// }

// addMyFriends("Eric")
// addMyFriends("Hansdeka")
// addMyFriends("Siahaan")

// // console.log(myFriends[0])
// // console.log(myFriends.length)
// // myFriends[3] = undefined
// // console.log(myFriends)

// myFriends.pop()
// myFriends.pop()
// myFriends.pop()
// myFriends.pop()

// console.log(myFriends)

/* 11. For Loop */

// let myFriend = ['default']

// function addMyaFriends(friend) {
//     addMyaFriends.unshift(friend)
//     console.log(myFriend)
// }

// // for (let i = 0; i < 10; i++) {
// //     console.log(i)
// // }
// console.log(myFriend)

// for (let i = 0; i < 10; i++) {
//     myFriend.push(i)
// }

// console.log(myFriend)

/* 12. Break, Continue, Return */
// let myFriend = ['default']

// function addMyFriends(friend) {
//     myFriend.unshift(friend)
//     console.log(myFriend)
// }

// for (let i = 0; i < 20; i++) {
//     myFriend.push(i)
// }

// console.log(myFriend)

// let evenNumbers = []
// let oddNumbers = []

// for (let i = 0; i < 50; i++) {
//     if (i % 2 === 0) {
//         evenNumbers.push(i)
//     } else {
//         oddNumbers.push(i)
//     }
// }

// // console.log(evenNumbers, oddNumbers)

// function skipNumber(number) {

//     let evenNumbers = []

//     for (let i = 0; i < 20; i++) {
//         if (i % 2 === 0) {
//             evenNumbers.push(i)
//         }
//     }
//     return evenNumbers
// }

// console.log(skipNumber(10))


/* 12. oBJECT*/

// const myObject = {
//     'keyname': 'value',
//     'keyname2': 'value2',
// }

// console.log(myObject['keyname'])

/*13. Call Object */

// const myProfile = {
//     name: "Eric",
//     age: 28
// }

// const secondProfile = {
//     name: 'Hansdeka',
//     age: 25
// }

// function primitiveMutate(primitive) {
//     primitive++
//     console.log(primitive)
// }

// function mutate(obj) {
//     obj.age++
// }

// let num = 100
// primitiveMutate(num)
// console.log(num)

// mutate(secondProfile)
// console.log(secondProfile)

/* 14. Scoping */

// const Hello = "World"
function x() {
    const Hello = "World"
    console.log(Hello)
}

x()