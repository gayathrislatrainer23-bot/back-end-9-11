const express = require('express');
const app = express ();
const  errorHandler= require("./middleware/errorHandler");
const connectDB = require('./config/db');
  const StudentRoutes = require('./routes/studentRoutes')
  const AuthRoutes = require('./routes/authRoutes')

app.use(express.json())
// middleware  to parse json 

// connect mongodb
connectDB()

app.get('/test-error',(req,res,next)=>{
    const err = new Error("test error")
    err.status = 400;
    next(err)
})

// app.get("/", (req,res)=>{
//     res.send("hello , express")
// })

console.log('haii1')
// routes
app.use('/students', StudentRoutes)
app.use('/auth', AuthRoutes)
console.log('haii1')

app.use(errorHandler)


const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`server is running ${PORT}`)
})
