const Student = require("../models/student")
const bcrypt = require('bcrypt');
const jwt  = require("jsonwebtoken")
// const jwt =  require('jsonwebtoken')
// Register
exports.register = async(req,res,next) =>{
try{
const {email , password, name,age} = req.body
// jwt.sign()
      const existingStudent= await Student.find({email:email})

      if(!existingStudent){

          // hash the password
          const salt = await bcrypt.genSalt(10)
          
          const hashedPassWord  = await bcrypt.hash(password,salt)
          
          const student = await  Student.create({email,name,age,password: hashedPassWord})
          console.log(student)
res.status(201).json({
      sucess: true,
            student: student
})

      }else{
res.status(400).json({
      sucess: false,
          message : "you already signup"

      }
    )

}
}catch(err){
next(err)
}

} 


exports.login = async(req,res,next) =>{
try{
const {email , password} = req.body

      const existingStudent= await Student.findOne({email:email})

console,log(existingStudent)
      if(!existingStudent){

res.status(400).json({
      sucess: false,
          message : "you are not registed "

      }
    )

      }else{
        const modelPassword = existingStudent.password

     const isMatch= await bcrypt.compare(password,modelPassword)
     if(!isMatch) return res.status(400).json({
        message: "invalid password"
     })

     const token =jwt.sign(
      {
            email : existingStudent.email
      },
      "secret",
      {expiresIn : "2h"}
     )



res.status(200).json({
    message:" login sucessful",
    token
})
}
}catch(err){
next(err)
}


} 

