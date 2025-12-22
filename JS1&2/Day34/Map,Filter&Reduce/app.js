// let arr = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225]


// const ans = arr.map((item) => {
//     return item % 2 == 0 ? true : false
// })

// // const ans = arr.map(item => item % 2 == 0 ? true : false)

// console.log(ans)



// double the numbers
// const nums = [1, 2, 3, 4, 5];
// const double = nums.map(item => item * 2)
// console.log(double)



// convert numbers to string
// const nums = [10, 20, 30];
// const strArr = nums.map(item => String(item))
// console.log(strArr)



// capitalise first letter
// const names = ["shubham", "rahul", "neha"];
// const capital = names.map(item => item[0].toUpperCase() + item.slice(1))
// console.log(capital)




// Extract specific property -> ["Aman", "Riya", "Kunal"]
// const users = [
//   { id: 1, name: "Aman" },
//   { id: 2, name: "Riya" },
//   { id: 3, name: "Kunal" }
// ];

// let usernames = users.map(item => item.name)
// console.log(usernames)




// Add 18+ status

// const people = [
//   { name: "Amit", age: 17 },
//   { name: "Pooja", age: 22 }
// ];

// const ans = people.map((item) => {
//     if(item.age > 18)
//     {
//         item.isAdult = true
//     }
//     else
//     {
//         item.isAdult = false
//     }
//     return item
// })

// const ans = people.map((item) => {
//     let newObj = {}
//     newObj.name = item.name
//     newObj.age = item.age
//     newObj.isAdult = item.age > 18 ? true : false
//     return newObj
// })


// const ans = people.map((item) => {
//     let val = {
//         ...item,
//         isAdult : (item.age > 18 ? true : false)
//     }
//     return val
// })


// const ans = people.map((item) => {
//     return {...item, isAdult : (item.age > 18 ? true : false)}
// })


// const ans = people.map((item) => ({...item, isAdult : (item.age > 18 ? true : false)}))


// console.log(ans)
// console.log(people)


// prices with GST
// const prices = [100, 250, 400];

// const ans = prices.map(item => item + (item / 100 * 18))
// console.log(ans)



// format full name
// const users = [
//   { firstName: "shubham", lastName: "kashyap" },
//   { firstName: "rohit", lastName: "sharma" }
// ];

// const ans = users.map((item) => {
//     return item.firstName[0].toUpperCase() + item.firstName.slice(1) + " " + 
//            item.lastName[0].toUpperCase() + item.lastName.slice(1)
// })

// console.log(ans)



// mask phone number
// const phones = [9876543210, 9123456789];
// const ans = phones.map(item => "******" + item.slice(6))
// const ans = phones.map(item => "******" + item % 10000)

// console.log(ans)












// Normalize product data
const products = [
  { name: "laptop", price: 50000, },
  { name: "phone", price: 20000,  }
];

let ans = products.map(item => {
    let val = {}
    val.name = item.name.toUpperCase()
    val.price = "$" + item.price

    return val
})


console.log(ans)




























