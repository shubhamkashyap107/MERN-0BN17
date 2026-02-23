const inputTag = document.getElementById("input")
const button = document.getElementById("btn")
const list = document.getElementById("list")




button.addEventListener("click", () => {

    const listItem = document.createElement("li")
    listItem.innerText = inputTag.value
    list.append(listItem)

    listItem.addEventListener("click", () => {

        const str = localStorage.getItem("data")
        const arr = JSON.parse(str) 
        const filteredArr = arr.filter((item) => {
            return item != listItem.innerText
        })
        localStorage.setItem("data", JSON.stringify(filteredArr))
        
        
        listItem.remove()

    })
    
    let existingData = localStorage.getItem("data")
    let originalArr = JSON.parse(existingData) || []
    originalArr.push(inputTag.value)
    localStorage.setItem("data", JSON.stringify(originalArr))
    
    inputTag.value = ""
})


window.addEventListener("load", () => {

    const data = localStorage.getItem("data")
    const parsedData = JSON.parse(data) || []

    for(let item of parsedData)
    {
        const listItem = document.createElement("li")
        listItem.innerText = item
        list.append(listItem)


    listItem.addEventListener("click", () => {

        const str = localStorage.getItem("data")
        const arr = JSON.parse(str) || []
        const filteredArr = arr.filter((item) => {
            return item != listItem.innerText
        })
        localStorage.setItem("data", JSON.stringify(filteredArr))
        
        
        listItem.remove()

    })
    }


})


// localStorage.setItem("name", "qwertyuiop")
// localStorage.setItem("name2", "asdfghnjm,")
// console.log(localStorage.getItem("name"))
// // localStorage.clear()
// console.log(localStorage.length)
// localStorage.removeItem("name")
