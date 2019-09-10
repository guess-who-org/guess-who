const express = require('express');
const authRouter = require('./auth/auth-router');
const userRouter = require('./users/userRouter');
const authMiddleware = require('./auth/auth-middleware');
const celebsRouter = require('./celebs/celebsRouter');
const gamesRouter = require('./games/gamesRouter');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/celebs', authMiddleware, celebsRouter);
router.use('/games', authMiddleware, gamesRouter);

module.exports = router;