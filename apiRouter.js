const express = require('express');
const authRouter = require('./auth/auth-router');
const authMiddleware = require('./auth/auth-middleware');
const celebsRouter = require('./celebs/celebsRouter');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/celebs', authMiddleware, celebsRouter);

module.exports = router;