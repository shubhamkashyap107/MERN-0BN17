// let arr = [1,3,5,7,10]

// const ans = arr.reduce((prev, curr) => {
//     return prev + curr
// }, 10)

// console.log(ans)




// let arr = ["q","w","e","r","t","y"]

// const ans = arr.reduce((prev, curr) => {
//     return prev + curr
// })

// console.log(ans)






// find max
// const arr = [-10, -5, -20, -8];


// const max = arr.reduce((prev, curr) => {
//     return Math.max(curr, prev)
// })

// console.log(max)



// sum of even numbers
// const arr = [1, 2, 3, 4, 6, 7, 8];


// let ans = arr.reduce((prev, curr) => {
//     return prev + (curr % 2 == 0 ? curr : 0)
// }, 0)


// console.log(ans)





// Convert the array into an object where key = element, value = length.

// const arr = ["apple", "bat", "ball"];

// const ans = arr.reduce((prev, curr) => {
//     prev[curr] = curr.length
//     return prev
// }, {})

// console.log(ans)








// count frequency
// const arr = ["a", "b", "a", "c", "b", "a"];


// const ans = arr.reduce((prev, curr) => {
//     if(prev[curr])
//     {
//         prev[curr] = prev[curr] + 1
//     }
//     else{
//         prev[curr] = 1
//     }
//     return prev
// }, {})


// console.log(ans)


// flatten the array
// const arr = [[1, 2], [3, 4], [5]];



// const ans = arr.reduce((prev, curr) => {
//     return [...prev, ...curr]
// })



// console.log(ans)












// remove duplicate
const arr = [1, 2, 2, 3, 4, 3, 5];


const ans = arr.reduce((prev, curr,  index) => {
    if(arr.indexOf(curr) == index)
    {
        prev.push(curr)
    }
    return prev
}, [])


console.log(ans)















