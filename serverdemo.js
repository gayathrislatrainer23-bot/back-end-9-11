const http = require("http");
const fs = require("fs");
const path = require('path')
 const server = http.createServer((req,res)=>{
      if(req.url === "/about"){
        res.end("This is About Page")
      }else if(req.url === "/data"){
           res.end("This is data Page")
      }else{
        res.end("welcome to Home" )
      }
    
   })

 const port = 5000
 server.listen(port, ()=>{
    console.log(` servr running in the port ${port}`)
 })