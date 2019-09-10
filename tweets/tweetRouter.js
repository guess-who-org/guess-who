const express = require('express');
const router = express.Router();
const dbModel = require('../database/guessWhoModel.js');

router.get('/', async (req, res) => {
    
    try{
        const tweets = await dbModel.getTweets();
        return res.status(200).json(tweets[0])
    }
    catch (err) {
        return res.status(500).json({err: err.message})
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const tweet = await dbModel.getTweetById(id);
        return res.status(200).json(tweet[0])
    }
    catch (err) {
        return res.status(500).json({err: err.message})
    }
});

router.post('/', async (req, res) => {
    let tweet = req.body;

    try{
        if (!tweet.tweet|| !tweet.celeb_id) {
            return res.status(500).json({message: "missing tweet or celeb"})
        }
        
        const addedTweet = await dbModel.insertTweet(tweet);
        const selectedTweet = await dbModel.getTweetById(addedTweet[0])
        if (!addedTweet) {
            return res.status(500).json({message: "Could find not user"})
        };
        
        return res.status(200).json({message: `Added ${selectedTweet[0].tweet}!`})
    }
    catch (err) {
        return res.status(500).json({err: err.message})
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try{
        const selectedTweet = await dbModel.getTweetById(id);
        
        if (!selectedTweet) {
            return res.status(500).json({message: "Could find not tweet"})
        };

        const deletedTweet = await dbModel.deleteTweet(id)

        if (deletedTweet !== 1) {
            return res.status(500).json({message: "Could delete not tweet"})
        };
        
        return res.status(200).json({message: `Deleted ${selectedTweet.tweet}!`})
    }
    catch (err) {
        return res.status(500).json({err: err.message})
    }
});

module.exports = router;