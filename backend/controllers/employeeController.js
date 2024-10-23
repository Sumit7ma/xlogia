const Employee = require('../models/Employee');
const mongoose = require('mongoose'); 

exports.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};

exports.getEmployeeById = async (req, res) => {
    const { id } = req.params; 

    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
    }

    const employee = await Employee.findById(id);
    if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
    }
    res.json(employee);
};

exports.addEmployee = async (req, res) => {
    const { empId, name, email, age } = req.body; 
    const newEmployee = new Employee({ empId, name, email, age }); 

    await newEmployee.save();
    res.status(201).json(newEmployee);
};

exports.updateEmployee = async (req, res) => {
    const { id } = req.params; 
    const { empId , name, email, age } = req.body;

    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(id, { name, email, age }, { new: true });
    if (!updatedEmployee) {
        return res.status(404).json({ message: "Employee not found" });
    }
    res.json(updatedEmployee);
};

exports.deleteEmployee = async (req, res) => {
    const { id } = req.params; // Use the id parameter

    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
    }

    const deletedEmployee = await Employee.findByIdAndDelete(id); 
    if (!deletedEmployee) {
        return res.status(404).json({ message: "Employee not found" });
    }
    res.json({ message: 'Employee deleted' });
};
