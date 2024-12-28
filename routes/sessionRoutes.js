const express = require('express');
const router = express.Router();
const { Session } = require('../models');

router.get('/', async (req, res) => {
    const sessions = await Session.findAll();
    res.json(sessions);
});

router.post('/', async (req, res) => {
    const newSession = await Session.create(req.body);
    res.status(201).json(newSession);
});

module.exports = router;
