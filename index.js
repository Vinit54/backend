const express = require('express');
require("dotenv").config(); // enviroment variable config
require('./database/connection')()
const PORT = process.env.PORT || 3000
const app = express();

const { superAdminRouter } = require('./router/superadmin-router');
const {login} = require('./controller/global-controller');
// const { admin } = require('./router/admin-router');
// const { employee } = require('./router/employee-router');

app.use(express.json());
app.get('/', (req, res) => {
    res.json({ "msg": "hello world" })
})

const APIRouter = express.Router()
app.use('/api', APIRouter)

APIRouter.get('', (req, res) => res.json({ 'msg': 'api is working' }))
APIRouter.post("/login", login);
APIRouter.use("/superadmin", superAdminRouter);
// APIRouter.use("/admin", admin);
// APIRouter.use("/employee", employee);

app.listen(PORT, () => {
    console.log(`server listning on port ${PORT}`)
})

