// let arr = ["z", "g", "j", "a", "d"]
// // arr.sort() // sorts lexographically(dictionary order)

// arr.sort((a, b) => {
//     return a.localeCompare(b)
//     // return b.localeCompare(a)
// })

// // arr.sort((a,b) => a.localeCompare(b))

// console.log(arr)



// let arr = [false, true, false, true]
// // arr.sort()
// arr.sort((a,b) => b - a)
// console.log(arr)
// arr.sort((a,b) => a - b)
// console.log(arr)



// let arr = [99,10,12,11,1,2,32,22,30,3,9]
// arr.sort() //  [1, 10, 11, 12, 2, 22, 3, 30, 32, 9, 99]

// arr.sort((a,b) => a - b)
// arr.sort((a,b) => b - a)



// console.log(arr)




let users = [
    {name : "shubham", age : 25, isPaid : true},
    {name : "divya", age : 25, isPaid : false},
    {name : "sumit", age : 20, isPaid : true},
    {name : "gabbar", age : 55, isPaid : false}, 
    {name : "shaktiman", age : 40, isPaid : false}, 
    {name : "antman", age : 20, isPaid : false}, 
    {name : "gangadhar", age : 40, isPaid : true}
]

// users.sort((a,b) => a.name.localeCompare(b.name))
// users.sort((a,b) => b.name.localeCompare(a.name))

// users.sort((x,y) => x.age - y.age)
// users.sort((x,y) => y.age - x.age)

// users.sort((a,b) => a.isPaid - b.isPaid)
users.sort((a,b) => b.isPaid - a.isPaid)


console.log(users)











