// const myBtn = document.getElementById("btn")

// myBtn.addEventListener("click", (e) => {
//     if(e.isTrusted)
//     {
//         console.log("HEavy Task")
//     }
// })


const target = document.getElementById("target")
const rightContainer = document.getElementById("right")

target.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("qwerty", e.target.id)
})


rightContainer.addEventListener("dragover", (e) => {
    e.preventDefault()
})


rightContainer.addEventListener("drop", (e) => {
    e.preventDefault()
    const data = e.dataTransfer.getData("qwerty")
    console.log(data)
    e.target.append(document.getElementById(data))
})