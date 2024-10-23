const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employeeController');

// Get all employees
router.get('/employees', EmployeeController.getEmployees);

// Get a specific employee by ID
router.get('/employees/:id', EmployeeController.getEmployeeById); // Added for fetching a single employee

// Add a new employee
router.post('/employees', EmployeeController.addEmployee);

// Update an employee by ID
router.put('/employees/:id', EmployeeController.updateEmployee); // Updated path

// Delete an employee by ID
router.delete('/employees/:id', EmployeeController.deleteEmployee);

module.exports = router;
