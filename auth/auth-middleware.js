const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = (req, res, next) => {
    if (req.headers.token) {
        try {
            jwt.verify(req.headers.token, secrets.jwtSecret);
            next();
        } catch (err) {
            res.status(401).json({ message: 'Invalid token.' });
        }
    } else {
        res.status(400).json({ message: 'Missing token.' });
    }
};