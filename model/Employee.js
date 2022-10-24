const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"]
    },
    salary: {
        type: mongoose.Decimal128,
        required: true
    }
});

const employeeModel = mongoose.model('Employee', EmployeeSchema);
module.exports = employeeModel