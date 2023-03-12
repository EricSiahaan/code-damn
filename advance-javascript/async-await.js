

// promiseSetTimeout().then(() => {
    //     console.log('Statement 1')
    //     return promiseSetTimeout()
    // }).then(() => {
        //     console.log('Statement 2')
// }).then (() => {
//     console.log('Statement 3')
// })

// console.log(promiseSetTimeout())

// async function boot() {
//     await promiseSetTimeout()
//     console.log('Statement 1')

//     await promiseSetTimeout()
//     console.log('Statement 2')

//     await promiseSetTimeout()
//     console.log('Statement 3')
// }

// console.log(boot())
// (async function() {
    
    //     const data = await promiseSetTimeout()
    
    //         console.log('Statement 1')
    
    //         const data2 =await promiseSetTimeout()
    //         console.log('Statement 2')
    
    //     const data3 = await promiseSetTimeout()
    //     console.log('Statement 3')
    // })
    // // ()
    
    
    // const coba = new Promise(resolve =>{
        //     setTimeout(() => {
            //     resolve('selesai')
            // }, 2000);
            // })
            // console.log(coba);
            
            // coba.then(() => console.log(coba));
            // function promiseSetTimeout() {
            //     return new Promise(resolve => {
            //         setTimeout(() => {
            //             resolve()
            //         }, 1000)
            //     })
            // }


            function cobaPromise() {
                return new Promise((resolve, reject) =>{
        const waktu = 1000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai')
            }, waktu);
        }else {
            reject ('Kelamaan')
        }
    })
}

// const coba = cobaPromise();
// coba
// .then(() => console.log(coba))
// .catch(() => console.log(coba));

// const coba = cobaPromise()
// coba.then(() => console.log(coba))

async function cobaAsync () {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (err) {
        console.error(err)
    }
}

cobaAsync()
