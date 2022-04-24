const express = require('express');
const {
    getAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin,
} = require("../controller/employee-controller");

const adminRouter = express.Router();

adminRouter.get("/", getAdmin);
adminRouter.post("/createAdmin", createAdmin);
adminRouter.put("/updateAdmin", updateAdmin);
adminRouter.delete("/deleteAdmin", deleteAdmin);

module.exports = { adminRouter };