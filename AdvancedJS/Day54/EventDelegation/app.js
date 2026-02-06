// const a = document.getElementById("a")
// const b = document.getElementById("b")
// const c = document.getElementById("c")
// const d = document.getElementById("d")


// a.addEventListener("click", () => console.log("A Clicked"))
// b.addEventListener("click", () => console.log("B Clicked"))
// c.addEventListener("click", () => console.log("C Clicked"))
// d.addEventListener("click", () => console.log("D Clicked"))

// const allCards = document.getElementsByClassName("product")


// for(let item of allCards)
// {
//     item.addEventListener("click", (e) => {
//         // console.log(e)
//         console.log(`${e.target.innerText} added to cart.`)
//     })
// }









// EVENT DELEGATION
const parent = document.getElementById("container")


parent.addEventListener("click", (e) => {
    if(e.target.id == "container")
    {
        
    }
    else
    {
        console.log(`${e.target.innerText} added to the cart`)
    }

})








