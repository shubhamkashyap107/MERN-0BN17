let obj = {
    name : "Shubham",
    age : 25
}

// let age = "age"

// console.log(obj)
// console.log(obj.age)
// console.log(obj[age])
// console.log(obj["age"])


// obj.age = 26
// obj["age"] = 26
// console.log(obj)

// obj.city = "delhi"
// obj["country"] = "India"
// console.log(obj)


// delete(obj.age)
// delete(obj)
// obj = {}
// console.log(obj)



let User = {
    name : "XYZ",
    age : 23,
    paymentInfo : {
        cardNumber : 1234567890,
        expiry : "22/05/30",
        possibleTransactions : {
            upi : true,
            swipe : true,
            tap : false
        }
    }
}


// console.log(User.paymentInfo?.posibleTransactions?.tap)
// // console.log(undefined.tap)



// console.log("Inportant code")




// Destructuring

let user = {
    name : "Shubham",
    age : 24,
    city : "delhi",
    hasHisOwnCar : true
}

console.log(user.name)
console.log(user["name"])


const { name, city : place, age, xyz , hasHisOwnCar : hasCar} = user

// city = "Pune"

// console.log(name)
// console.log(city)
// console.log(age)
// console.log(xyz)

console.log(place)
console.log(user)








