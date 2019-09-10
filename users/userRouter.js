const express = require('express');
const router = express.Router();
const dbModel = require('../database/guessWhoModel.js');

router.get('/', async (req, res) => {
    
    try{
        const users = await dbModel.getUsers();
        return res.status(200).json(users)
    }
    catch (err) {
        return res.status(500).json({err: err.message})
    }
});

router.post('/', async (req, res) => {
    let user = req.body;

    try{
        if (!user.username || !user.password) {
            return res.status(500).json({message: "missing username or password"})
        }
        
        const newUser = await dbModel.insertUser(user);
        
        if (!newUser) {
            return res.status(500).json({message: "Could find not user"})
        };
        
        return res.status(200).json({message: `Logged in as ${newUser.username}!`})
    }
    catch (err) {
        return res.status(500).json({err: err.message})
    }
});

router.delete('/', async (req, res) => {
    const { id } = req.params;

    try{
        const selectedUser = await dbModel.getUserById(id);
        
        if (!selectedUser) {
            return res.status(500).json({message: "Could find not user"})
        };

        const deletedUser = await dbModel.deleteUser(id)

        if (!deletedUser !== 1) {
            return res.status(500).json({message: "Could delete not user"})
        };
        
        return res.status(200).json({message: `Deleted ${selectedUser.username}!`})
    }
    catch (err) {
        return res.status(500).json({err: err.message})
    }
});

module.exports = router;