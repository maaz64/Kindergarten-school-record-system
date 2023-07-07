const express = require('express');
const router = express.Router();

const studentController = require('../controller/studentController');

router.post('/add',studentController.createStudent);
router.put('/update/:id',studentController.updateStudent);
router.delete('/delete/:id',studentController.deleteStudent);
router.get('/accessAll',studentController.readStudent);



module.exports = router;
