const express = require('express');
const {
    getEmployee,
    saveEmployee,
    updateEmployee,
    deleteEmployee,
} = require("../controller/employee-controller");

const employeeRouter = express.Router();

emplyeeRouter.get("/", getEmployee);
emplyeeRouter.post("/", saveEmployee);
emplyeeRouter.put("/", updateEmployee);
emplyeeRouter.delete("/", deleteEmployee);

module.exports = { employeeRouter };