const express = require('express');

const {
    getSuperAdmin,
    updateSuperAdmin,

} = require("../controller/superadmin-controller");

const superAdminRouter = express.Router();

superAdminRouter.get("/", getSuperAdmin);//to check router is working or not
superAdminRouter.post("/", updateSuperAdmin);//register new user


module.exports = { superAdminRouter };