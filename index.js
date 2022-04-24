const express = require('express');
require("dotenv").config(); // enviroment variable config
require('./database/connection')()
const PORT = process.env.PORT || 3000
const app = express();

const { superAdminRouter } = require('./router/superadmin-router');
// const { admin } = require('./router/admin-router');
// const { employee } = require('./router/employee-router');

app.use(express.json());
app.get('/', (req, res) => {
    res.json({ "msg": "hello world" })
})

const APIRouter = express.Router()
app.use('/api', APIRouter)

APIRouter.get('', (req, res) => res.json({ 'msg': 'api is working' }))
APIRouter.use("/superadmin", superAdminRouter);
// APIRouter.use("/admin", admin);
// APIRouter.use("/employee", employee);

app.listen(PORT, () => {
    console.log(`server listning on port ${PORT}`)
})

// // APIRouter.get("/"+process.env.UPLOAD_FOLDER+"/*", (req, res, next) => {
// //       const path = req.url;
// //       const filePath = `${__dirname}${path}`
// //       res.sendFile(filePath);
// //       // next()   // for show normal error => cannot get ....
// // });

// // APIRouter.get("/"+process.env.CATEGORY_UPLOAD_FOLDER+"/*", (req, res, next) => {
// //       const path = req.url;
// //       const filePath = `${__dirname}${path}`
// //       res.sendFile(filePath);
// //       // next()   // for show normal error => cannot get ....
// // });

// app.use(handleError)