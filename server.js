const express = require('express');
const authRouter = require('./auth/auth-router');

const server = express();

server.use(express.json());
server.use('/auth', authRouter);

module.exports = server;