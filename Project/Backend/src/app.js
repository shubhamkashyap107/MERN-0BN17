require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const { authRouter } = require("./routes/auth.route")
const PORT = process.env.PORT || 8080



app.use(express.json())
app.use("/api/auth", authRouter)






mongoose.connect(process.env.MONGO_URL)
.then(() => {

    console.log("DB Connected...")
    
    
    app.listen(PORT, () => {
        console.log("Server Running on PORT", PORT)
    })

})




