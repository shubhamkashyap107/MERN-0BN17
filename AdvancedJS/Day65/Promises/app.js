// console.log(Promise.prototype.__proto__.__proto__)

// let p1 = new Promise((resolve, reject) => {
   
//     let data = [
//         {a : 1},{b : 2},{c : 3}
//     ]

//     if(data.length)
//     {
//         resolve(data)
//     }
//     else
//     {
//         reject("Failed")
//     }
// })

// p1
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     console.log(error)
// })


let myPromise = new Promise((res, rej) => {
    let data = true
    setTimeout(() => {
        if(data)
        {
            res("OK")
        }
        else
        {
            rej("Fail")
        }
    }, 3000)
})

console.log(myPromise)
myPromise.then((data) => {
    console.log(data)
    console.log(myPromise)
})
.catch((err) => {
    console.log(err)
    console.log(myPromise)
})