const express = require('express');

const {
    getSuperAdmin,
    updateSuperAdmin,
    createSuperAdmin,

} = require("../controller/superadmin-controller");

const superAdminRouter = express.Router();

superAdminRouter.get("/", getSuperAdmin);//to check router is working or not
superAdminRouter.post("/", createSuperAdmin);
superAdminRouter.post("/", updateSuperAdmin);//register new user


module.exports = { superAdminRouter };