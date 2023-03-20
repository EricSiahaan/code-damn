
function promiseSetTimeout() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

async function fetchAll() {
    const req1 = await fetch('./data1.json')
    const req2 = await fetch('./data2.json')
    const req3 = await fetch('./data3.json')

    console.log(req1, req2, req3)
}

fetchAll()