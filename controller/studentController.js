const Student = require("../models/student");

// (post) creatinhg students record
module.exports.createStudent = async function (req, res) {
  try {
    const {
      name,
      contact,
      age,
      subjects,
      studentId,
      address = "NA",
    } = req.body;

    if (!name || !age || !contact || !studentId) {
      return res.status(400).json({
        message: "Please fill all the required fields!!",
        data: {},
      });
    }

    if (age < 3 || age > 5) {
      return res.status(400).json({
        message: "The age of student must be between 3 to 5",
        data: {},
      });
    }

    const newStudent = await Student.create({
      name,
      contact,
      age,
      subjects,
      studentId,
      address,
    });
    return res.status(201).json({
      message: "Student record created successfully",
      data: newStudent,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.sttaus(400).json({
        message:
          "Provided student ID is already taken!!! please provide a unique ID",
        data: {},
      });
    }
  }
  return res.json(500, {
    message: "Something went wrong while creating student record",
    data: {},
  });
};

// (put) updating students record using params 
module.exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, contact, address } = req.body;
    if (!name || !contact) {
      return res.status(400).json({
        message: "Fill all the required field",
        data: {},
      });
    }
    const updateStudent = await Student.findByIdAndUpdate(
      id,
      {
        name,
        contact,
        address,
      },
      { new: true }
    );

    if (!updateStudent) {
      return res.status(404).json({
        message: "No Student found with the given Id",
        data: {},
      });
    }

    return res.status(200).json({
      message: "Student record updated successfully",
      data: updateStudent,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong while updating student record",
      data: {},
    });
  }
};

// (delete) deleting students record using params
module.exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStudent = await Student.findByIdAndDelete(id); 
        
        if(!deletedStudent)
        {
            return res.status(404).json({
                message:"No student is found with the given Id",
                data:{}
            });
        }
        return res.status(200).json({
            message:"Student record deleted successfully",
            data:deletedStudent
        })
    } catch (error) {
        return res.status(500).json({
            message:"Something went wrong while deleting student record",
            data:{}
        })
    }
  
};

// (read) getting student in small chunks using pagination
module.exports.readStudent = async (req,res)=>{
  try {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const maxLimit = Math.min(limit,5);
    const skip = (page -1) * limit;
    const totalStudents = await Student.countDocuments();
    const students = await Student.find().limit(maxLimit).skip(skip);

    if(!students)
    {
      return res.status(404).json({
        message:'No student record found',
        data:{}
      });
    }

    if(((totalStudents/maxLimit)+1)<page)
    {
      return res.status(404).json({
        message:"Their is no next page",
        data:{}
      })
    }
    return res.status(200).json({
      message:'Success',
      data:students
    });

  } catch (error) {
    return res.status(500).json({
      message:'Internal server error',
      data:{}
    })
  }
}
