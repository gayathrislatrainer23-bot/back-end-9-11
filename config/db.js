const mongoose  = require('mongoose');

// // connect mongodb
// mongoose.connect('mongodb://127.0.0.1:27017/StudentDB')
//   .then(() => console.log('Connected!'))
//   .catch((err)=>console.error("mongodb connection failed"));
const connectDB = async()=> {
try{
    await 
    mongoose.connect('mongodb://127.0.0.1:27017/StudentDB')
  .then(() => console.log('Connected!'))
  .catch((err)=>console.error("mongodb connection failed"));
}catch(err){
    console.error("mongodb connection failed :", err.message)
}

}
module.exports =connectDB;