// const { User } = require('../models/user-model');
const { Admin } = require('../models/admin-model');
const passwordHash = require('password-hash')
const jwt = require('jsonwebtoken');
const Joi = require('joi');

async function getAdmin(req, res) {
    try {
        const admin = await Admin.find();
        res.json(admin);
        // res.json({ message: "suceess getAdmin" });
    } catch (err) {
        res.json({ message: err });
    }
}

async function updateAdmin(req, res) {
    try {
        const result = await Admin.findOneAndUpdate(
            { _id: "6262ce0787fefd32b4a2f535" },
            { $set: req.body },
            { new: true }
        );
        console.log(req.body);
        res.json(result);
        // res.json({ message: "suceess updateAdmin" });
    } catch (err) {
        res.json({ message: err });
        console.log(err);
    }
}
////////////////////// createAdmin /////////////////////////////
function validateUserForRegistration(user) {
    const schema = Joi.object({
        name: Joi.string().min(4).max(40),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(40).required(),
        role: Joi.string().valid('superadmin', 'admin', 'employee').required()
        //   phone: Joi.string().min(10).max(12)
    });
    const result = schema.validate(user)
    return result;
}

async function createAdmin(request, response) {
    try {
        const result = validateUserForRegistration(request.body)
        if (result.error) {
            response.status(400);
            console.log(result.error.details[0].message)
            // return next(new Error(result.error.details[0].message))
        }
        const userData = result.value;

        let isExists = await User.isExists(userData.email)  // is this email exist 
        if (!isExists) {
            userData.password = passwordHash.generate(userData.password)
            user = await new User(userData).save()

            const token = await jwt.sign({ _id: user._id }, process.env.JWT_KEY, { expiresIn: "30 days" })

            response.cookie("jwt", token, {
                expires: new Date(Date.now() + 60 * 60 * 60 * 24 * 30),
                httpOnly: true
            })

            response.json({ msg: "register successful", token })

        } else {
            response.status(400);
            //   return next(new Error('email already exist'))
            console.log("user not found ")
        }
    } catch (err) {
        response.json({ message: err });
        console.log(err);
    }
}

async function deleteAdmin(req, res, next) {
    const _id = req.params.orderId;
    console.log("delete by id", _id);
    const result = await Order.deleteOne({ _id })
    res.json({ result, msg: "delete admin" })
}

/////////////
module.exports = { getAdmin, updateAdmin, createAdmin, deleteAdmin };