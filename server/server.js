const express = require('express')
const dotenv = require('dotenv')
const userRoute = require("./routes/userRoute")
const mongoose = require('mongoose')
const app = express()
dotenv.config()

const port = process.env.PORT 
const mongodb= process.env.mongodb_url


app.use('/',userRoute)
mongoose.connect(mongodb).then(()=>{
    console.log("database is connected")
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`)
    })
})



