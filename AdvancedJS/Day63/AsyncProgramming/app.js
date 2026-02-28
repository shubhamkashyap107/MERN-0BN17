// console.log("First")




// const id1 = setTimeout(() => {
//     console.log("Mid 1")
// }, 3000)



// const id2 = setTimeout(() => {
//     console.log("Mid 2")
// }, 2000)

// console.log(id1)
// console.log(id2)
// clearTimeout(id2)




// console.log("Last")



// set interval


// const intervalId = setInterval(() => {
//     console.log("OK")
// }, 4000)


// clearInterval(intervalId)

// console.log("First")

// let curr = 1
// let n = 20

// const id = setInterval(() => {
//     if(curr > n)
//     {
//         clearInterval(id)
//         return
//     }
//     console.log(curr)
//     curr++
// }, 0)


// console.log("Last")



// make your own setInterval using setTimeout

// for(let i = 1; i <= 100000; i++)
// {
//     setTimeout(() => {
//         console.log("OK", i)
//     }, 3000)
// }


let id;

function mySetInterval(cb, time)
{
    id = setTimeout(() => {
        cb()
        mySetInterval(cb, time)
    }, time)
}

function myClearInterval(intervalId)
{
    clearTimeout(intervalId)
}

mySetInterval(() => {
    console.log("Mera custom function")
}, 500)

setTimeout(() => {
    myClearInterval(id)
}, 5000)