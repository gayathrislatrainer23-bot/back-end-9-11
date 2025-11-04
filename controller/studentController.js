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
exports.createStudents = async (req,res) =>{
    try{
        console.log("createStudents")
let {studentData }= req.body 
   console.log("createStudents")
    const students = await  Student.create(studentData)

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