const express = require('express');
const { User } = require('../models/user-model');
const passwordHash = require('password-hash')
const jwt = require('jsonwebtoken');
const Joi = require('joi');

// **********************start: login user **************************

function validateLoginCredentials(body) {
      const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            role: Joi.string().valid('superadmin', 'admin', 'employee').required()
      });

      const result = schema.validate(body)
      return result;
}
async function login(request, response, next) {
      const result = validateLoginCredentials(request.body);
      if (result.error) {
            response.status(400);
            const err = new Error(result.error.details[0].message);
            //   return next(err)
            console.log(result.error.details[0].message)
            return 0
      }

      const { email, password, role } = result.value;
      const user = await User.findOne({ email });

      if (user) {
            const isPasswordMatched = passwordHash.verify(password, user.password)
            if (isPasswordMatched) {
                  payload = {
                        _id: user._id,
                        email: user.email,
                        role: "superadmin"
                  }

                  const token = await jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "30 days" })

                  response.cookie("jwt", token, {
                        expires: new Date(Date.now() + 60 * 60 * 60 * 24 * 30),
                        httpOnly: true
                  })

                  response.json({ msg: "login successful", token })
            }
      }

      response.status(400);
      const err = new Error("Email or password is invalid");
      console.log("Email or password is invalid")
      // return next(err)
}

module.exports = { login };

