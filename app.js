const express = require("express")
const app = express()




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
