// console.log(Promise.prototype.__proto__.__proto__)
// const box = document.getElementById("container")


// const url = "https://hp-api.onrender.com/api/characters"

// const response = fetch(url)

// response
// .then((res) => {
//     return res.json()
// })
// .then((data) => {
//     for(let item of data)
//     {
//         let card = document.createElement("div")
//         let image = document.createElement("img")
//         let name = document.createElement("p")
//         card.classList.add("card")
//         image.classList.add("img")
//         name.classList.add("name")

//         image.src = item.image || "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
//         name.innerText = item.name

//         card.append(image, name)
//         box.append(card)
//     }
// })
// .catch(() => {
//     console.log("Failed to fetch response")
// })
// .finally(() => {
//     console.log("Kuch aise kaam jo hona hi tha")
// })




const imageTag = document.getElementById("img")
const button = document.getElementById("btn")


button.addEventListener("click", async() => {
    

    const res = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await res.json()
    imageTag.src = data.message


})



// button.addEventListener("click", () => {
//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         // console.log(data)
//         imageTag.src = data.message
//     })
// })



// async function abc() {
    
// }

// const fn = async() => {

// }

// console.log(abc())
// console.log(fn())





async function getData()
{
    const res = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await res.json()
    console.log(data)
}

// getData()