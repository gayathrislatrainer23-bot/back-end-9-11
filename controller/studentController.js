//  controller
const Student = require("../models/student")

// get all students
exports.getStudents = async (req,res,next) =>{
    try{

    const students = await  Student.findAll()

    res.Status(200)
        .json({
            sucess: true,
            // data: students
        })

    }catch(err){
        next(err)
console.log(err.message)
    }
}

// create student
exports.createStudents = async (req,res) =>{
    try{

    const students = await  Student.create()

    res.Status(200)
        .json({
            sucess: true,
            // data: students
        })

    }catch(err){
console.log(err.message)
    }
}