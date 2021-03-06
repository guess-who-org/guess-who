const express = require('express');
const authRouter = require('./auth/auth-router');
const userRouter = require('./users/userRouter');
const authMiddleware = require('./auth/auth-middleware');
const celebsRouter = require('./celebs/celebsRouter');
const gamesRouter = require('./games/gamesRouter');
const tweetsRouter = require('./tweets/tweetRouter');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/celebs', authMiddleware, celebsRouter);
router.use('/games', authMiddleware, gamesRouter);
router.use('/tweets', authMiddleware, tweetsRouter);

module.exports = router;