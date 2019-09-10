const express = require('express');
const model = require('../database/guessWhoModel');

const router = express.Router();

router.post('/', validateGameCeleb, async (req, res) => {
    try {
        await model.insertGameCeleb(req.body);
        let gamesCeleb = await model.getGamesCelebsById(req.body.game_id, req.body.celeb_id);
        res.status(201).json(gamesCeleb);
    } catch (err) {
        res.status(500).json({ error: 'There was a problem saving the games celeb to the database.' });
    }
});

router.get('/', async (req, res) => {
    try {
        let gamesCeleb = await model.getGamesCelebs();
        res.status(200).json(gamesCeleb);
    } catch (err) {
        res.status(500).json({ error: 'Could not retrieve games celeb information.' });
    }
});

router.delete('/:id', validateGameCelebId, async (req, res) => {
    try {
        await model.deleteGameCeleb(parseInt(req.params.id[0]), parseInt(req.params.id[1]));
        res.status(200).json(req.gamesCeleb);
    } catch (err) {
        res.status(500).json({ error: 'There was an error removing the games celeb from the database.' });
    }
});

function validateGameCeleb(req, res, next) {
    if (req.body) {
        if (req.body.game_id) {
            if (req.body.celeb_id) {
                next();
            } else {
                res.status(400).json({ message: 'Missing required celeb_id field.' });
            }
        } else {
            res.status(400).json({ message: 'Missing required game_id field.' });
        }
    } else {
        res.status(400).json({ message: 'Missing game data.' });
    }
}

async function validateGameCelebId(req, res, next) {
    let gamesCeleb = await model.getGamesCelebsById(parseInt(req.params.id[0]), parseInt(req.params.id[1])).first();
    if (gamesCeleb) {
        req.gamesCeleb = gamesCeleb;
        next();
    } else {
        res.status(404).json({ message: 'The games celeb with the specified ID does not exist.'});
    }
}

module.exports = router;