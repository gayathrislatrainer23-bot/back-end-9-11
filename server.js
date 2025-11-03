const express = require('express');
const app = express ();
const  errorHandler= require("./middleware/errorHandler");
const mongoose  = require('mongoose');

app.use(express.json())
// middleware  to parse json 

// connect mongodb
mongoose.connect('mongodb://127.0.0.1:27017/backendDB')
  .then(() => console.log('Connected!'))
  .catch((err)=>console.error("mongodb connection failed"));

app.get('/test-error',(res,req,next)=>{
    const err = new Error("test error")
    err.status = 400;
    next(err)
})
app.get("/", (req,res)=>{
    res.send("hello , express")
})


app.use(errorHandler)


const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`server is running ${PORT}`)
})
