const usernameIp = document.getElementById("un")
const passwordIp = document.getElementById("pw")
const submitBtn = document.getElementById("submitBtn")
const unError = document.getElementById("username-error")
const pwError = document.getElementById("password-error")



submitBtn.addEventListener("click", () => {
    const username = usernameIp.value
    const password = passwordIp.value

    if(username.length < 4 || username.length > 15)
    {
        unError.style.display = "block"
    }

    let hasUc = false
    let hasLc = false
    let hasSc = false

    for(let item of password)
    {
        if(item >= "A" && item <= "Z")
        {
            hasUc = true
        }
        if(item >= "a" && item <= "z")
        {
            hasLc = true
        }

        if(["!","*","?","_","#"].includes(item))
        {
            hasSc = true

        }

    }

    if(password.length < 8 || password.length > 20 || hasLc == false || hasUc == false || hasSc == false)
    {
        pwError.style.display = "block"
    }



})