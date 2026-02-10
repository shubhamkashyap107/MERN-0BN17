const box = document.getElementById("box")


window.addEventListener("keydown", (e) => {
    if(e.code == "ArrowDown")
    {
        let offset = box.style.top || "0px"
        offset = parseInt(offset)
        box.style.top = `${offset + 10}px`
    }
    else if(e.code == "ArrowUp")
    {
        let offset = box.style.top || "0px"
        offset = parseInt(offset)
        box.style.top = `${offset - 10}px`
    }
    else if(e.code == "ArrowRight")
    {
        let offset = box.style.left || "0px"
        offset = parseInt(offset)
        box.style.left = `${offset + 10}px`
    }
    else if(e.code == "ArrowLeft")
    {
        let offset = box.style.left || "0px"
        offset = parseInt(offset)
        box.style.left = `${offset - 10}px`
    }
})