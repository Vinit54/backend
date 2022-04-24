const express = require('express');
const {
    getEmployee,
    saveEmployee,
    updateEmployee,
   
} = require("../controller/employee-controller");

const employeeRouter = express.Router();

emplyeeRouter.get("/", getEmployee);
emplyeeRouter.post("/", saveEmployee);
emplyeeRouter.put("/", updateEmployee);

module.exports = { employeeRouter };