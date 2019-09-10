const express = require('express');
const model = require('../database/guessWhoModel');
const authMiddleware = require('../auth/auth-middleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/', validateCeleb, async (req, res) => {
    try {
        let [id] = await model.insertCeleb(req.body);
        let celeb = await model.getCelebById(id);
        res.status(201).json(celeb);
    } catch (err) {
        res.status(500).json({ error: 'There was a problem saving the celeb to the database.' });
    }
});

router.get('/', async (req, res) => {
    try {
        let celebs = await model.getCelebs();
        res.status(200).json(celebs);
    } catch (err) {
        res.status(500).json({ error: 'Could not retrieve celebs information.' });
    }
});

router.update('/:id', validateCelebId, async (req, res) => {
    try {
        await model.updateCeleb(req.params.id, req.body);
        let celeb = await model.getCelebById(req.params.id);
        res.status(200).json(celeb);
    } catch (err) {
        res.status(500).json({ error: 'The celeb information could not be updated.' });
    }
});

router.delete('/:id', validateCelebId, async (req, res) => {
    try {
        await model.deleteCeleb(req.params.id);
        res.status(200).json(req.celeb);
    } catch (err) {
        res.status(500).json({ error: 'There was an error removing the celeb from the database.' });
    }
});

function validateCeleb(req, res, next) {
    if (req.body) {
        if (req.body.name) {
            next();
        } else {
            res.status(400).json({ message: 'Missing required name field.' });
        }
    } else {
        res.status(400).json({ message: 'Missing celeb data.' });
    }
}

function validateCelebId(req, res, next) {
    let celeb = await model.getCelebById(req.params.id).first();
    if (celeb) {
        req.celeb = celeb;
        next();
    } else {
        res.status(404).json({ message: 'The celeb with the specified ID does not exist.'});
    }
}