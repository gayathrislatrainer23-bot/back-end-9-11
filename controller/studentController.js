//  controller
const Student = require("../models/student")

// get all students
exports.getStudents = async (req,res,next) =>{
    try{
console.log(" getStudents")
    const students = await  Student.find()

    res.status(200)
        .json({
            sucess: true,
            data: students
        })

    }catch(err){
        next(err)
console.log(err.message)
    }
}

// create student
exports.createStudents = async (req,res,next) =>{
    try{
        console.log("createStudents")
let {studentData }= req.body 
const students = await  Student.create(studentData)
console.log("createStudents",students)

    res.status(200)
        .json({
            sucess: true,
            students: students
        })

    }catch(err){
        console.log(err.message)
        next(err)
    }
}
exports.getStudentById = async (req,res)=>{
     let studentId = req.params._id;
try{

    const student = await Student.findById(studentId ) 

     res.status(200)
        .json({
            sucess: true,
            student: student
        })
}catch(err){
    next(err)
}

}

exports.updateStudentById = async (req,res)=>{
     let studentId = req.params._id;
  let   {age} = req.body
try{

    const student = await Student.findByIdAndUpdate(studentId,{age:age}) 
console.log("updatedStudents",student)
     res.status(200)
        .json({
            sucess: true,
            student: student
        })
}catch(err){
    next(err)
}

}
