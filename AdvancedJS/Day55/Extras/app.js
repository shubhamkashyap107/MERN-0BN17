const container = document.getElementById("container")
const list = document.getElementById("list")

const dataFromBackend = [
  "Aarav",
  "Vivaan",
  "Aditya",
  "Vihaan",
  "Arjun",
  "Sai",
  "Reyansh",
  "Krishna",
  "Ishaan",
  "Kabir",
  "Rohan",
  "Rahul",
  "Aman",
   "Aditya",
  "Vihaan",
  "Arjun",
  "Sai",
  "Reyansh",
  "Krishna",
  "Ishaan",
  "Kabir",
  "Rohan",
  "Rahul",
  "Aman",
   "Aditya",
  "Vihaan",
  "Arjun",
  "Sai",
  "Reyansh",
  "Krishna",
  "Ishaan",
  "Kabir",
  "Rohan",
  "Rahul",
  "Aman",
   "Aditya",
  "Vihaan",
  "Arjun",
  "Sai",
  "Reyansh",
  "Krishna",
  "Ishaan",
  "Kabir",
  "Rohan",
  "Rahul",
  "Aman",

  "Neha",
  "Ananya",
  "Priya",
  "Riya",
  "Sneha",
  "Pooja",
  "Karan",
  "Varun",
  "Siddharth",
  "Shubham",
  "Meera",
  "Kavya"
];

// const myListItem = document.createElement("li")
// myListItem.innerText = dataFromBackend[0]
// list.appendChild(myListItem)

// for(let item of dataFromBackend)
// {
//     const myLi = document.createElement("li")
//     myLi.innerText = item
//     list.appendChild(myLi)
// }

// const products = [
//   {
//     id: 1,
//     name: "iPhone 15 Pro",
//     price: 1299,
//     category: "Electronics,Electronics,Electronics,Electronics,",
//     img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569"
//   },
//   {
//     id: 2,
//     name: "Nike Air Force 1",
//     price: 120,
//     category: "Footwear,Electronics,Electronics,Electronics,",
//     img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
//   },
//   {
//     id: 3,
//     name: "MacBook Air M2",
//     price: 1099,
//     category: "Electronics,Electronics,Electronics,Electronics,",
//     img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
//   },
//   {
//     id: 4,
//     name: "Gaming Chair",
//     price: 250,
//     category: "Furniture,Electronics,Electronics,Electronics,",
//     img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
//   },
//   {
//     id: 5,
//     name: "Smart Watch",
//     price: 199,
//     category: "Accessories,Electronics,Electronics,Electronics,",
//     img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
//   },
//   {
//     id: 6,
//     name: "Backpack",
//     price: 60,
//     category: "Bags",
//     img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
//   },
// ];



// for(let item of products)
// {
//     const card = document.createElement("article")
//     const image = document.createElement("img")
//     const textContainer = document.createElement("div")
//     const productName = document.createElement("h3")
//     const price = document.createElement("span")
//     const category = document.createElement("p")

//     // assigning classes
//     card.classList.add("card")
//     image.classList.add("image")
//     textContainer.classList.add("text")
//     productName.classList.add("productname")
//     price.classList.add("price")
//     category.classList.add("category")


//     // setting text and attributes
//     image.setAttribute("src", item.img)
//     productName.innerText = item.name
//     price.innerText = `$ ${item.price}`
//     category.innerText = (item.category.length > 20 ? item.category.slice(0,20) + "..." : item.category)
//     // category.innerText = item.category

//     // setting up the card
//     textContainer.append(productName, price, category)
//     card.append(image, textContainer)

//     // styling the card
//     // card.style.border = "4px solid black"
//     // card.style.height = "200px"

//     //appending the card into the container
//     container.appendChild(card)


//     // attaching an event
//     card.addEventListener("click", () => {
//         alert(item.name + " Added to cart")
//     })
    
// }




// document.addEventListener("keydown", (e) => {
//     if(e.key == "Enter")
//     {
//         alert("Msg Sent")
//     }
// })


const div = document.getElementById("box")


window.addEventListener("keydown", (e) => {
    console.log("Fired")
    if(e.key == "ArrowDown")
    {
        div.style.top = div.style.top ? div.style.top.split("").slice(0, -2).join("") : "1px"
    }
})