const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const model = require('../database/guessWhoModel');

const router = express.Router();

router.post('/register', validateUser, async (req, res) => {
    try {
        let credentials = req.body;
        let hash = bcrypt.hashSync(credentials.password, 14);
        credentials.password = hash;
        let user = await model.insert(credentials);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: "There was a problem saving the user to the database." });
    }
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