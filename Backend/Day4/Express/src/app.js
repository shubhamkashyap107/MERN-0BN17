const express = require("express")
const app = express()


app.use(express.json())


app.get("/hello", (req, res) => {
    // res.cookie("name", "shubham")
    // res.status(202)
    // res.json("Hello world")


    res.cookie("name", "xyz").status(200).json("Hello")
})


app.post("/hello", (req, res) => {
    res.json("hello from post api")
})


app.patch("/hello", (req, res) => {
    res.json("hello from patch api")
})


app.delete("/hello", (req, res) => {
    res.json("hello from delete api")
})


app.post("/say-hi", (req, res) => {

    // console.log(req.body)
    const{name, age} = req.body

    res.json(`My name is ${name} and my age is ${age}`)
})


app.get("/users/:id", (req, res) => {

    const{ id } = req.params


    res.send(`Id is ${id}`)
})



app.get("/products", (req, res) => {

    // console.log(req.query)
    const{name, quantity} = req.query

    res.send(`Product : ${name}, quantity : ${quantity}`)
})


app.listen(8080, () => {
    console.log("Server Running on Port 8080...")
})