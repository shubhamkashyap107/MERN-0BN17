const express = require("express")
const {v4 : uuid} = require("uuid")
const app = express()
const cors = require("cors")

app.use(cors({
    // origin : ["http://localhost:5173","http://localhost:5174"]
}))
app.use(express.json())
app.use("/users", (req, res, next) => { // logging
    console.log(req.url)
    next()
})


let db = []


app.get("/todos", (req, res) => {
    try {
        res.status(200).json(db)
        
    } catch (error) {
        res.json({msg : error.message})
    }
})

app.get("/todos/:id", (req, res) => {
    const{ id } = req.params
    try {
        const foundTodo = db.find((item) => {
            return item.id == id
        })

        res.status(200).json(foundTodo || {})
    } catch (error) {
        
    }
})

app.post("/todos", (req, res) => {
    try {
        const{title, desc} = req.body
        if(!title || !desc)
        {
            throw new Error("Please enter title/desc")
        }
        db.push({title, desc, id : uuid()})
        res.status(200).json(db)
    } catch (error) {
        res.json({msg : error.message})
    }

})

app.delete("/todos/:id", (req, res) => {
    try {
        const{id} = req.params

        const filteredDb = db.filter((item) => {
            return item.id != id
        })

        db = filteredDb
        res.status(200).json(db)

    } catch (error) {
        res.status(400).json({msg : error.message})
    }
})

app.patch("/todos/:id", (req, res) => {
    try {
        const{title, desc} = req.body
        const{id} = req.params

        for(let item of db)
        {
            if(item.id == id)
            {
                item.title = title
                item.desc = desc
            }
        }

        res.status(200).json(db)
    } catch (error) {
        res.status(400).json({msg : error.message})
    }
    

})




app.listen(8080, () => {
    console.log("Server running...")
})