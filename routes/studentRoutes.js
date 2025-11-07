const express = require('express');
const router = express.Router();
const studentController = require("../controller/studentController")


//create
router.post("/create_students", studentController.createStudents)
//  get all students
router.get("/get_all_students", studentController.getStudents)

// find by id
router.get("/get_students_by_id/:_id", studentController.getStudentById)

// update
router.put("/put_students_by_id/:_id", studentController.updateStudentById)



module.exports = router;