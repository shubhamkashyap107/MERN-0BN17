const myBtn = document.getElementById("btn")
const myDabba = document.querySelector("div")


myBtn.addEventListener("click", () => {
    console.log("Btn 2 clicked")
})


myDabba.addEventListener("mouseenter", () => {
    myDabba.style.backgroundColor = "red"
    myDabba.innerText = "hello dabba is clicked"
    // myDabba.style.display = "none"
})

myDabba.addEventListener("mouseleave", () => {
    myDabba.style.backgroundColor = "yellow"

})