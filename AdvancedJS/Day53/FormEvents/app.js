const myForm = document.getElementById("form")
const myUsernameIp = document.getElementById("username")
const loggedInUserName = document.getElementById("naam")
const bekarBtn = document.getElementById("xyz")
const submitBtn = document.getElementById("submitBtn")
const myPasswordIp = document.getElementById("pass")
const icon = document.getElementById("icon")



// myForm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     console.log(e)
// })

// myUsernameIp.addEventListener("focus", () => {
//     console.log("Input selected")
// })

// myUsernameIp.addEventListener("blur", () => {
//     console.log("Input Unselected")
// })

// myUsernameIp.addEventListener("input", (e) => {
//     // console.log(e)
//     // console.log(e.target.value)
//     loggedInUserName.innerText = e.target.value
// })

// myUsernameIp.focus()

// bekarBtn.addEventListener("click", () => {
//     // myUsernameIp.focus()
//     submitBtn.click()
// })



icon.addEventListener("click", () => {
    let ipType = myPasswordIp.getAttribute("type")
    if(ipType == "password")
    {
        myPasswordIp.setAttribute("type", "text")
        icon.innerText = "🙈"
    }
    else
    {
        myPasswordIp.setAttribute("type", "password")
        icon.innerText = "👀"
    }
})