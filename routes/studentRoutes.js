const express = require('express');
const router = express.Router();
const studentController = require("../controller/studentController")



//  get all students
router.get("/get_all_students", studentController.getStudents)
router.get("/create_students", studentController.getStudents)



module.exports = router;