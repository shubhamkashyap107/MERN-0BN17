const button = document.getElementById("btn")
const input = document.getElementById("ip")
const container = document.getElementById("parent")


button.addEventListener("click", () => {
    const child = document.createElement("p")
    child.innerText = input.value
    container.append(child)
    sessionStorage.setItem("Data", input.value)
    input.value = ""
})