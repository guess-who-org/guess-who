const express = require('express');
const model = require('../database/guessWhoModel');

const router = express.Router();

router.post('/', validateGameUser, async (req, res) => {
    try {
        await model.insertGameUser(req.body);
        let gamesUser = await model.getGamesUsersById(req.body.game_id, req.body.user_id);
        res.status(201).json(gamesUser);
    } catch (err) {
        res.status(500).json({ error: 'There was a problem saving the games celeb to the database.' });
    }
});

router.get('/', async (req, res) => {
    try {
        let gamesUser = await model.getGamesUsers();
        res.status(200).json(gamesUser);
    } catch (err) {
        res.status(500).json({ error: 'Could not retrieve games celeb information.' });
    }
});

router.delete('/:id', validateGameUserId, async (req, res) => {
    try {
        await model.deleteGameUser(parseInt(req.params.id[0]), parseInt(req.params.id[1]));
        res.status(200).json(req.gamesUser);
    } catch (err) {
        res.status(500).json({ error: 'There was an error removing the games celeb from the database.' });
    }
});

function validateGameUser(req, res, next) {
    if (req.body) {
        if (req.body.game_id) {
            if (req.body.user_id) {
                next();
            } else {
                res.status(400).json({ message: 'Missing required user_id field.' });
            }
        } else {
            res.status(400).json({ message: 'Missing required game_id field.' });
        }
    } else {
        res.status(400).json({ message: 'Missing game data.' });
    }
}

async function validateGameUserId(req, res, next) {
    let gamesUser = await model.getGamesUsersById(parseInt(req.params.id[0]), parseInt(req.params.id[1])).first();
    if (gamesUser) {
        req.gamesUser = gamesUser;
        next();
    } else {
        res.status(404).json({ message: 'The games user with the specified ID does not exist.'});
    }
}

module.exports = router;