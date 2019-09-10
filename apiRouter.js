const express = require('express');
const authRouter = require('./auth/auth-router');
const userRouter = require('./users/userRouter');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);

module.exports = router;