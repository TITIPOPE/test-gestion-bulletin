const express = require('express');
const router = express.Router();
const { Matiere } = require('../models');

router.get('/', async (req, res) => {
    const matieres = await Matiere.findAll();
    res.json(matieres);
});

router.get('/:id', async (req, res) => {
    const matiere = await Matiere.findByPk(req.params.id);
    if (!matiere) return res.status(404).json({ error: 'Matière introuvable' });
    res.json(matiere);
});

router.post('/', async (req, res) => {
    const newMatiere = await Matiere.create(req.body);
    res.status(201).json(newMatiere);
});

router.put('/:id', async (req, res) => {
    const matiere = await Matiere.findByPk(req.params.id);
    if (!matiere) return res.status(404).json({ error: 'Matière introuvable' });
    await matiere.update(req.body);
    res.json(matiere);
});

router.delete('/:id', async (req, res) => {
    const matiere = await Matiere.findByPk(req.params.id);
    if (!matiere) return res.status(404).json({ error: 'Matière introuvable' });
    await matiere.destroy();
    res.json({ message: 'Matière supprimée avec succès' });
});

module.exports = router;
