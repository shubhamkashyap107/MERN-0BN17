const div = document.querySelector("div")
const sunIcon = document.getElementById("icon")

// console.log(div.classList)

// console.log(div.classList.contains("a"))
// console.log(div.classList.contains("ab"))

// console.log(div.classList.remove("c"))
// console.log(div.classList.length)
// console.log(div.classList.add("newClass"))
// // div.setAttribute("class", "qwerty")
// console.log(div.classList.forEach((item) => {
//     console.log(item)
// }))


// div.classList.replace("d", "z")

sunIcon.classList.replace("fa-sun", "fa-moon")
sunIcon.classList.toggle("header")