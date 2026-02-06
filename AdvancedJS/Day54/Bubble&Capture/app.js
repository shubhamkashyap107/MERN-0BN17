const outerDiv = document.getElementById("outer")
const midDiv = document.getElementById("middle")
const innerDiv = document.getElementById("inner")


outerDiv.addEventListener("click", (e) => {
    console.log("Outer Div Clicked")
}, true)

midDiv.addEventListener("click", () => {
    console.log("Middle Div Clicked")
}, false)

innerDiv.addEventListener("click", () => {
    console.log("Inner Div Clicked")
}, true)