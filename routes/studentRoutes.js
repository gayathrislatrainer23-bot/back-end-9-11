const express = require('express');
const router = express.Router();
const studentController = require("../controller/studentController")


//create
router.post("/create_students", studentController.createStudents)
//  get all students
router.get("/get_all_students", studentController.getStudents)



module.exports = router;