const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', validateUser, (req, res) => {
    res.send("Not implemented yet, but valid request body was sent.");
});

router.post('/login', validateUser, (req, res) => {
    res.send("Not implemented yet, but valid request body was sent.");
});

function validateUser(req, res, next) {
    if (req.body) {
        if (req.body.username) {
            if (req.body.password) {
                next();
            } else {
                res.status(400).json({ message: 'Missing required password field.' });
            }
        } else {
            res.status(400).json({ message: 'Missing required username field.' });
        }
    } else {
        res.status(400).json({ message: 'Missing user data.' });
    }
}

module.exports = router;