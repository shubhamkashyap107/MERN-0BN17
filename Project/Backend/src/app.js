require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cp = require("cookie-parser")
const { authRouter } = require("./routes/auth.route")
const { profileRouter } = require("./routes/profile.route")
const PORT = process.env.PORT || 8080

app.use(cp())
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/profile", profileRouter)

app.use((req, res) => {
    res.status(404).json({
        err : "Not found"
    })
})






mongoose.connect(process.env.MONGO_URL)
.then(() => {

    console.log("DB Connected...")
    
    
    app.listen(PORT, () => {
        console.log("Server Running on PORT", PORT)
    })

})




