const jwt = require('jsonwebtoken');
const { Admin } = require('../models/admin-model');

function adminAuthMiddleware(request, response, next) {
    try {
        const bearerToken = request.headers.authorization
        let token = null;
        token = bearerToken.split(" ")[1];
        const payload = jwt.verify(token, process.env.JWT_KEY)
        if (payload.isAdmin) {
            return next()
        }
        response.status(401);
        return response.json({ error: "only admin can change this information" })

    } catch (error) {
        response.status(401);
        return response.json({ error: "401 Unauthorized Errorz" })
    }
}

module.exports = { adminAuthMiddleware }