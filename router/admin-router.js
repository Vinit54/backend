const express = require('express');
const {
    getUser,
    saveUser,
    updateUser,
    deleteUser,
} = require("../controller/employee-controller");

const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.post("/", saveUser);
userRouter.put("/", updateUser);
userRouter.delete("/", deleteUser);

module.exports = { userRouter };