const express = require('express');
const {
    getAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin,
} = require("../controller/employee-controller");

const userRouter = express.Router();

userRouter.get("/", getAdmin);
userRouter.post("/createAdmin", createAdmin);
userRouter.post("/updateAdmin", updateAdmin);
userRouter.delete("/deleteAdmin", deleteAdmin);

module.exports = { userRouter };