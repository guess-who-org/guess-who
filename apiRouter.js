const express = require('express');
const authRouter = require('./auth/auth-router');
const celebsRouter = require('./celebs/celebsRouter');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/celebs', celebsRouter);

module.exports = router;