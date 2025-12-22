let obj = {} // creating an object


let obj2 = { // initialsing an object with some value
    name : "Shubham",
    age : 22
}


let obj3 = {
    name : "gabbar",
    age : 54
}

//accessing values of an object
// console.log(obj3.name) // dot operator
// console.log(obj3["age"]) // must be passed as a string or else will be treated as a variable


let obj4 = {
    name : "cat",
    legs : 4
}

//adding properties to an object
obj4.fur = true
obj4["color"] = "orange"
// console.log(obj4)


let obj5 = {
    key : "value",
    age : 45
}
// deleting a property
delete(obj5.key)
delete(obj5["age"])
// console.log(obj5.naam) // undefined





// let outerObj = {
//     name : "username",
//     age : 25,
//     address : {
//         city : "Delhi",
//         country : "India"
//     },
//     favColor : ["pink", "red", "black", "blue"],
//     sayHello : () => {
//         console.log("Hello ji")
//     },
//     isHandsome : false
// }


// console.log(outerObj.name)
// console.log(outerObj.age)
// console.log(outerObj.isHandsome)
// console.log(outerObj.address.city)
// console.log(outerObj.address.country)
// console.log(outerObj.favColor[2])
// outerObj.sayHello()


// let demoObj = {
//     k1 : "v1",
//     k2 : "v2",
//     k3 : "v3",
//     k4 : "v4"
// }


// for(let item in demoObj)
// {
//     console.log(item, demoObj[item])
// }











let outerObj = {
    name : "Shaktiman",
    age : 23,
    middleObject : {
        k : "v",
        innerObj : {
            ans : "answer"
        }
    }
}




console.log(outerObj.middlect)
console.log(outerObj?.middlect?.innerObj?.ans) // optional chaining





console.log("Important kaam")





