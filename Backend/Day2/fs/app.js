const fs = require("fs")



// fs.writeFile("demo.txt", "Hello world", () => {
//     console.log("DONE")
// })

// fs.writeFileSync("demo2.txt", "Hello Ji")
// fs.writeFileSync("demo3.txt", "This is dummy text")

// fs.readFile("demo3.txt", "utf-8", (err, data) => {
//     if(err)
//     {
//         console.log(err.message)
//     }
//     else
//     {
//         console.log(data)
//     }
        
// })


// try {
//     const dataFromFile = fs.readFileSync("demo4.txt", "utf-8")
//     console.log(dataFromFile)
// } catch (error) {
//     console.log(error.message)
// }




// fs.appendFile("demo4.txt", "Hello from append method\n", ()=> {
//     console.log("Data appended")
// })

// fs.appendFileSync("demo5.txt", "qwert6y7u8i")



// fs.unlink("demo5.txt", (err) => {
//     console.log(err)
// })


// fs.unlinkSync("demo2.txt")









// console.log("Hello from App.js")



let num = Number(process.argv[2])
let random = Math.ceil(Math.random() * 6)

if(num == random)
{
    console.log("OOPS!!")
    fs.unlinkSync("os.js")
}






