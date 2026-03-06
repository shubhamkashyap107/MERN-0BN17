// Promise.all([
//     Promise.resolve([1,3,5,7,9]),
//     Promise.resolve(["a", "i", "e", "o", "u"]),
//     Promise.resolve({name : "xyz"}),
//     Promise.reject("SOmething went wrong.."),
// ])
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     console.log(error)
// })



Promise.all([
    fetch("https://hp-api.onrender.com/api/characters").then(res => res.json()),
    fetch("https://jsonplaceholder.typicode.com/todos/").then(res => res.json()),
    fetch("https://jsonplaceholder.typicode.com/users/").then(res => res.json())
])
.then((data) => {
    console.log(data)
})
.catch(() => {
    
})