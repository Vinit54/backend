const { User } = require('../models/user-model');

async function getSuperAdmin(req, res) {
    try {
        const superAdmin = await User.find();
        res.json(superAdmin);
        // res.json({ message: "suceess getSuperAdmin" });
    } catch (err) {
        res.json({ message: err });
    }
}

async function updateSuperAdmin(req, res) {
    try {
        const result = await User.findOneAndUpdate(
            { _id: "6262ce0787fefd32b4a2f535" },
            { $set: req.body },
            { new: true }
        );
        console.log(req.body);
        res.json(result);
        // res.json({ message: "suceess updateSuperAdmin" });
    } catch (err) {
        res.json({ message: err });
        console.log(err);
    }
}

async function createSuperAdmin(req, res) {
    try {
        const result = await User.create(req.body);
        res.json(result);
        // res.json({ message: "suceess createSuperAdmin" });
    } catch (err) {
        res.json({ message: err });
        console.log(err);
    }
}
module.exports = { getSuperAdmin, updateSuperAdmin, createSuperAdmin };