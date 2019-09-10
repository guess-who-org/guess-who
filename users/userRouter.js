const express = require('express');
const router = express.Router();
const dbModel = require('../database/guessWhoModel');

router.get('/', async (req, res) => {
    
    try{
        const users = await dbModel('users');
        return res.status(200).json(users)
    }
    catch (err) {
        return res.status(500).json({err: err.message})
    }
});
