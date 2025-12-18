// let arr = [9,1,7,23,6,4]

// const ans = arr.find((item, index) => {
//     // return true
//     // return false
// })

// console.log(ans)


// let users = [
//     {
//         name : "Shubham",
//         hasPremium : false
//     },
//     {
//         name : "Ajay",
//         hasPremium : true
//     },
//     {
//         name : "Sutirtha",
//         hasPremium : false
//     },
//     {
//         name : "Aman",
//         hasPremium : true
//     },
// ]

// const user = users.find(item => item.hasPremium)
// console.log(user)

// const nums = [2, 4, 6, 8];
// const result = nums.find(n => n % 2 !== 0);
// console.log(result)


// const nums = [1, 2, 3, 2, 4, 3];
// const ans = nums.find((item, index) => {
//     return nums.indexOf(item) != index
// })
// console.log(ans)



// const nums = [3, 7, 11, 15, 18, 21, 22];
// const ans = nums.find((item, index) => {
//     return nums[index - 1] % 2 != 0 && nums[index + 1] % 2 == 0
// })
// console.log(ans)



const nums = [10, 20, 30, 40, 50];
let sum = 0;

const ans = nums.find((item) => {
    if(sum >= 60)
    {
        return true
    }
    else
    {
        sum += item
    }
})

console.log(ans)