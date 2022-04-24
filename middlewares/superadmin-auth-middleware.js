const jwt = require('jsonwebtoken');
const { SuperAdmin } = require('../models/superadmin-model');

function superadminAuthMiddleware(request, response, next) {
    try {
        const bearerToken = request.headers.authorization
        let token = null;
        token = bearerToken.split(" ")[1];
        const payload = jwt.verify(token, process.env.JWT_KEY)
        if (payload.isSuperAdmin) {
            return next()
        }
        response.status(401);
        return response.json({ error: "only superadmin can change this information" })

    } catch (error) {
        response.status(401);
        return response.json({ error: "401 Unauthorized Errorz" })
    }
}

module.exports = { superadminAuthMiddleware }