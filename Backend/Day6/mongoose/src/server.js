require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = process.env.PORT || 8080
const { Task } = require("./models/tasks.model")

app.use(express.json())


mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("DB Connected")

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})
.catch(() => {
    console.log("DB Connection Failed")
})




app.post("/todos", async(req, res) => {
    try {
        const{title, desc, isCompleted} = req.body
        const newTask = await Task.insertOne({title, desc, isCompleted})
        res.status(201).json(newTask)
        
    } catch (error) {
        res.status(400).json({
            err : error.message
        })
    }
})






