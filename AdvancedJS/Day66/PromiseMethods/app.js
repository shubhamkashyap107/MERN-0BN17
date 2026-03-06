// class Person{
//     constructor(n, a)
//     {
//         this.naam = n
//         this.age = a
//     }

//     static sayHi()
//     {
//         console.log(`Hello my name is ${this.naam} and my age is ${this.age}`)
//     }

// }


// const p1 = new Person("XYZ", 11)
// console.log(p1)
// p1.sayHi()








// const myPromise = new Promise((res) => {
//     res("OK")
// })

// myPromise.all()

// console.log(myPromise)





// Promise.allSettled([
//     // Promise.resolve([1,2,3,4,5]),
//     // Promise.reject("OK 2"),
//     // Promise.resolve("OK 3"),

//     fetch("https://hp-api.onrender.com/api/characters").then(res => res.json()),
//     fetch("https://jsonplaceholder.typicode.com/todos/").then(res => res.json()),
//     fetch("https://jsonplaceholder.typicode.com/users/").then(res => res.json())

// ])
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// })


// Promise.any([
    
//     fetch("https://hp-api.onrender.com/api/characters").then(res => res.json()),
//     fetch("https://jsonplaceholder.typicode.com/todos/").then(res => res.json()),
//     fetch("https://jsonplaceholder.typicode.com/users/").then(res => res.json())

// ])
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// })


Promise.race([
    
    fetch("https://hp-apii/characters").then(res => res.json()),
    fetch("https://jtypicode.com/todos/").then(res => res.json()),
    fetch("https://jsonplaceholdom/users/").then(res => res.json())

])
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(err)
})