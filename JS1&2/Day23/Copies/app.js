
// let obj = {
//     name : "xyz",
//     age : 22
// }

// let obj2 = obj // not good, shares reference, don't use


// shallow copy 
// let obj2 = {...obj}
// obj2.name = "shaktiman"
// console.log(obj)
// console.log(obj2)


// shallow copies shouldn't be made for nested objects

// let user1 = {
//     name : "xyz",
//     age : 22,
//     address : {
//         city : "Delhi",
//         country : "India"
//     },
//     sayHi : () => {
//         console.log("Hello")
//     }
// }


// let user2 = user1 // don't use

// let user2 = {...user1}

// console.log(user1)
// console.log(user2)

// user2.name = "Gabbar"
// user2.address.city = "Mumbai"


// console.log(user1)
// console.log(user2)









// Deep Copy

let user1 = {
    name : "xyz",
    age : 90,
    address : {
        city : "Delhi",
        country : "India"
    },
}

let user2 = structuredClone(user1)

console.log(user1)
console.log(user2)


user2.address.city = "Pune"


console.log(user1)
console.log(user2)







// JSON Method

let arr = [{name : "xyz"}, {name : "abc"}, {name : "klm"}]
let dataFromBackend = JSON.stringify(arr)
let originalObject = JSON.parse(dataFromBackend)
console.log(originalObject)
console.log(originalObject[0].name)



// won't work for functions, undefined, etc.

// let user1 = {
//     name : "xyz",
//     age : 22,
//     address : {
//         city : "Delhi",
//         country : "India"
//     },
//     sayHi : function()
//     {
//         console.log("Hello")
//     }
// }

// let jsonStr = JSON.stringify(user1)
// let user2 = JSON.parse(jsonStr)


// console.log(user1)
// console.log(user2)


// user2.address.city = "Banglore"


// console.log(user1)
// console.log(user2)