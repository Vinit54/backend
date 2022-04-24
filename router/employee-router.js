const express = require('express');
const {
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee,
} = require("../controller/employee-controller");

const employeeRouter = express.Router();

emplyeeRouter.get("/", getEmployee);
emplyeeRouter.post("/createEmployee", createEmployee);
emplyeeRouter.put("/updateEmployee", updateEmployee);
emplyeeRouter.delete("/deleteEmployee", deleteEmployee);

module.exports = { employeeRouter };