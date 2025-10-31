const express = require('express');
const app = express ();

app.use(express.json())
// middleware  to parse json 

app.get("/", (req,res)=>{
    res.send("hello , express")
})
const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`server is running ${PORT}`)
})
