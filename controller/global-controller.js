const express = require('express');

const login = (req, res) => {
    res.json({ message: "login" });
}

module.exports = { login };

