let arr = [1,3,5,7,9, true, "qwerty"]

// let ans = arr.every((item) => {
//     return item % 2 == 0
// })

// let ans2 = arr.some((item) => {
//     return item % 2 == 0
// })


let ans = arr.every((item) => {
    // return typeof(item) === "number"
    return typeof item === "number"
})

let ans2 = arr.some((item) => {
    return typeof item === "number"
})

console.log(ans)
console.log(ans2)