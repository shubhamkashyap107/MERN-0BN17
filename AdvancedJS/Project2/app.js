const pendingCardContainer = document.getElementById("pending-card-container")
const workingCardContainer = document.getElementById("working-card-container")
const doneCardContainer = document.getElementById("done-card-container")
const addBtn = document.getElementById("add-task-btn")
const titleInput = document.getElementById("title-ip")
const descInput = document.getElementById("desc-ip")


addBtn.addEventListener("click", (e) => {
    const title = titleInput.value.trim()
    const desc = descInput.value.trim()

    if(!title || !desc)
    {
        alert("Please enter both title and description")
        return
    }

    const card = document.createElement("article")
    card.setAttribute("id", Date.now())
    card.classList.add("card")
    card.draggable = true


    card.addEventListener("dragstart", (e) => {
        const data = e.dataTransfer.setData("shubham", e.target.id)
    })

    const titleContainer = document.createElement("h2")
    titleContainer.innerText = title

    const descContainer = document.createElement("p")
    descContainer.innerText = desc

    const date = new Date()
    let currDate = `${date.getDate()}, ${date.getMonth() + 1}, ${date.getFullYear()}`

    const dateContainer = document.createElement("span")
    dateContainer.innerText = currDate

    card.append(titleContainer, descContainer, dateContainer)
    pendingCardContainer.append(card)


    titleInput.value = ""
    descInput.value = ""
})


workingCardContainer.addEventListener("dragover", (e) => {
    e.preventDefault()
})



workingCardContainer.addEventListener("drop", (e) => {
    e.preventDefault()
    const id = e.dataTransfer.getData("shubham")
    workingCardContainer.append(document.getElementById(id))
})


doneCardContainer.addEventListener("dragover", (e) => {
    e.preventDefault()
})



doneCardContainer.addEventListener("drop", (e) => {
    e.preventDefault()
    const id = e.dataTransfer.getData("shubham")
    doneCardContainer.append(document.getElementById(id))
})



pendingCardContainer.addEventListener("dragover", (e) => {
    e.preventDefault()
})



pendingCardContainer.addEventListener("drop", (e) => {
    e.preventDefault()
    const id = e.dataTransfer.getData("shubham")
    pendingCardContainer.append(document.getElementById(id))
})