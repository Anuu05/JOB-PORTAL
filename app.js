const express = require("express")
const app = express()


//db connect
const {connectDB} = require("./database/dbConfig")
connectDB()

//parse json data
app.use(express.json())

//Routes
const userRoutes = require("./routes/userRoutes");
app.use("/", userRoutes)

app.get("/",(req,res)=>{
    res.send("Hello, World!")
})

app.get("/about",(req,res)=>{
    res.send("This is about page")
})






//server start
const port = 3000

app.listen(port, ()=>{
    console.log(`server is running`)
})
