const Employee = require('../models/Employee');
const mongoose = require('mongoose'); // Make sure to import mongoose

exports.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};

exports.getEmployeeById = async (req, res) => {
    const { id } = req.params; // The ID from the route

    // Check if id is a valid ObjectId
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
    const { empId, name, email, age } = req.body; // Include empId from request body
    const newEmployee = new Employee({ empId, name, email, age }); // Set empId

    await newEmployee.save();
    res.status(201).json(newEmployee);
};

exports.updateEmployee = async (req, res) => {
    const { id } = req.params; // The ID from the route
    const { name, email, age } = req.body;

    // Check if id is a valid ObjectId
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

    // Check if id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
    }

    const deletedEmployee = await Employee.findByIdAndDelete(id); // Use findByIdAndDelete
    if (!deletedEmployee) {
        return res.status(404).json({ message: "Employee not found" });
    }
    res.json({ message: 'Employee deleted' });
};
