const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    empId: { 
        type: Number,
        required: true,
        
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, //we use this line to sure email is in proper format
    },
    age: {
        type: Number,
        required: true,
    }
});

// Create the model
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
