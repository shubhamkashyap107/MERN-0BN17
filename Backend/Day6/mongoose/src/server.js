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

        if(!title || !desc)
        {
            throw new Error("Please enter all the fields")
        }

        const newTask = await Task.insertOne({title, desc, isCompleted})
        res.status(201).json(newTask)
        
    } catch (error) {
        res.status(400).json({
            err : error.message
        })
    }
})


app.get("/todos", async(req, res) => {
    try {
        const allTasks = await Task.find()
        res.status(200).json(allTasks)
    } catch (error) {
        res.status(400).json({
            err : error.message
        })
    }
})

app.get("/todos/:id", async(req, res) => {
    try {

        const { id } = req.params
        const foundTask = await Task.findById({_id : id})

        if(!foundTask)
        {
            throw new Error("Task does not exist / incorrect ID")
        }

        res.status(200).json(foundTask)


    } catch (error) {
        res.status(400).json({
            err : "Task does not exist / incorrect ID"
        })        
    }
})

app.put("/todos/:id", async(req, res) => {
    try {
        
        const { id } = req.params
        const{ title, desc } = req.body

        if(!title || !desc)
        {
            throw new Error("Please enter all the fields")
        }

        // lamba kaam

        const foundTask = await Task.findById(id)
        if(!foundTask)
        {
            throw new Error("Incorrect ID / task not found")
        }

        foundTask.title = title
        foundTask.desc = desc
        await foundTask.save()
        res.status(200).json(foundTask)


        // find by id and update
        // const updatedTask = await Task.findByIdAndUpdate(id, {title, desc}, {returnDocument  : "after", runValidators : true})
        // res.status(200).json(updatedTask)

    } catch (error) {
        res.status(400).json({
            err : "Incorrect ID / task not found",
            details : error.message
        })
    }
})

app.patch("/todos/:id", async(req, res) => {
    try {
        const{id} = req.params
        const{isCompleted} = req.body
        const updatedTask = await Task.findByIdAndUpdate(id, {isCompleted}, {runValidators : true, returnDocument : "after"})
        res.status(200).json(updatedTask)

    } catch (error) {
        res.status(400).json({
            err : error.message
        })
    }
})


app.delete("/todos/:id", async(req, res) => {
    try {
        const{id} = req.params
        const deletedTask = await Task.findByIdAndDelete(id)
        res.status(200).json(deletedTask)
    } catch (error) {
        res.status(400).json({
            err : error.message
        })
    }
})


