// const btns = document.getElementsByTagName("button")
// const lightMode = btns[0]
// const darkMode = btns[1]

// darkMode.addEventListener("click", () => {
//     document.body.style.backgroundColor = "black"
//     document.body.style.color = "white"
// })


// lightMode.addEventListener("click", () => {
//     document.body.style.backgroundColor = "white"
//     document.body.style.color = "black"
// })



const startBtn = document.getElementById("start")
const output = document.getElementById("output")


startBtn.addEventListener("click", () => {
    const n1 = Number(prompt("Enter number 1"))
    const n2 = Number(prompt("Enter number 2"))
    const operation = prompt("Enter operation (+,-,*,/)")


    if(!isNaN(n1) && !isNaN(n2) && ["+", "-", "*", "/"].includes(operation)) 
    {
        let ans = eval(`${n1} ${operation} ${n2}`)
        output.innerText = ans
        output.style.color = "green"

    }
    else
    {
        output.innerText = "Invalid Input"
        output.style.color = "red"
    }



})

