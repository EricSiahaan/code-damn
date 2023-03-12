function calculator (num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (operation === "+") {
            resolve(num1 +num2)
        } else if (operation === '-') {
            resolve(num1 -num2)
        } else {
            reject('error')
        }
    })
}

console.log(calculator(2,2))