const http = require("http");
const fs = require("fs");
// const EventEmitter  = require("events");
// const emitter = new  EventEmitter();
const path = require('path')


const server = http.createServer((req,res)=>{
const fullpath = path.join(__dirname,"Fzdsgdzfb.txt")

// res.writeHead(200,{"content-type" : "text/html"})
// res.write("<h1>hello  <h1>")
// fs.writeFileSync('demo.html',"Hello node js" )
// fs.readFile("./index.html", (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
// //   console.log(data)
// res.end(data)
//     }
// })

fs.readFile(fullpath,(err, data)=>{
    if(err){
        res.writeHead(404)
        res.end(err)
        console.log(err)
    }else{
res.writeHead(200,{"content-type" : "text/plain"})
//   console.log(data)
res.end(data)
    }
})

})
const port = 5000
server.listen(port, ()=>{
 console.log(` server running in the port ${port}`)
        
    })
    // emitter.on("greet",()=>{
    //     console.log("hello from event")
    // })
    // emitter.emit("greet")
    // const fullpath = path.join(__dirname,"Fzdsgdzfb.txt")
    // console.log(fullpath)