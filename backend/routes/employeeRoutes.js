const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employeeController');


router.get('/employees', EmployeeController.getEmployees); // print all lsitingt


router.get('/employees/:id', EmployeeController.getEmployeeById); //render data


router.post('/employees', EmployeeController.addEmployee);// Added 


router.put('/employees/:id', EmployeeController.updateEmployee); // Updated


router.delete('/employees/:id', EmployeeController.deleteEmployee);//delete

module.exports = router;
