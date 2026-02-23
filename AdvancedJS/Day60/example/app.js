const darkModeBtn = document.getElementById("dark")
const lightModeBtn = document.getElementById("light")
const main = document.getElementById("text")

window.addEventListener("load", () => {
    const theme = localStorage.getItem("theme")
    main.style.backgroundColor = (theme == "light" ? "white" : "black")
    main.style.color = (theme == "light" ? "black" : "white")
})

darkModeBtn.addEventListener("click", () => {
    main.style.backgroundColor = "black"
    main.style.color = "white"
    localStorage.setItem("theme", "dark")
})

lightModeBtn.addEventListener("click", () => {
    main.style.backgroundColor = "white"
    main.style.color = "black"
    localStorage.setItem("theme", "light")

})