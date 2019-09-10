const express = require('express');
const model = require('../database/guessWhoModel');
const gamesCelebsRouter = require('./gamesCelebsRouter');

const router = express.Router();

router.use('/games_celebs', gamesCelebsRouter);

router.post('/', validateGame, async (req, res) => {
    try {
        let [id] = await model.insertGame(req.body);
        let game = await model.getGameById(id);
        res.status(201).json(game);
    } catch (err) {
        res.status(500).json({ error: 'There was a problem saving the game to the database.' });
    }
});

router.get('/', async (req, res) => {
    try {
        let games = await model.getGames();
        res.status(200).json(games);
    } catch (err) {
        res.status(500).json({ error: 'Could not retrieve games information.' });
    }
});

router.put('/:id', validateGameId, async (req, res) => {
    try {
        await model.updateGame(req.params.id, req.body);
        let game = await model.getGameById(req.params.id);
        res.status(200).json(game);
    } catch (err) {
        res.status(500).json({ error: 'The game information could not be updated.' });
    }
});

router.delete('/:id', validateGameId, async (req, res) => {
    try {
        await model.deleteGame(req.params.id);
        res.status(200).json(req.game);
    } catch (err) {
        res.status(500).json({ error: 'There was an error removing the game from the database.' });
    }
});

function validateGame(req, res, next) {
    if (req.body) {
        if (req.body.title) {
            next();
        } else {
            res.status(400).json({ message: 'Missing required title field.' });
        }
    } else {
        res.status(400).json({ message: 'Missing game data.' });
    }
}

async function validateGameId(req, res, next) {
    let game = await model.getGameById(req.params.id).first();
    if (game) {
        req.game = game;
        next();
    } else {
        res.status(404).json({ message: 'The game with the specified ID does not exist.'});
    }
}

module.exports = router;