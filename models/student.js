const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  subjects: [
    {
      type: String,
    },
  ],
  age: {
    type: Number,
    required: true,
    min: 3,
    max: 5,
  },
  address: {
    type: String,
  },
});

const Student = mongoose.model('Student',studentSchema);
module.exports = Student;
