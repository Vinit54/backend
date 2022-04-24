const jwt = require('jsonwebtoken');
const { User } = require('../models/user-model');

const userAuthMiddleware = async (req, res, next) => {
    try {
        const bearerToken = req.headers.authorization;
        let token = null;
        token = bearerToken.split(" ")[1];

        jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
            if (err) {
                return res.status(401).json({ error: "you must be logged in" })
            }
            const { _id } = payload
            const userdata = await User.find({ _id })
            req.userdata = userdata
            next()

        })

    } catch (error) {
        console.log(error)
        res.status(401);
        return res.json({ error: "Unauthorized" })
    }
}
module.exports = { userAuthMiddleware }