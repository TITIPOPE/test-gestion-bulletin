// controllers/MatiereController.js
const { models } = require('../models');

// Créer une nouvelle matière
exports.createMatiere = async (req, res) => {
    try {
        const { name } = req.body;

        const newMatiere = await models.Matiere.create({ name });

        res.status(201).json(newMatiere);
    } catch (error) {
        res.status(500).json({ message: 'Erreur de création de matière', error });
    }
};

// Récupérer toutes les matières
exports.getAllMatieres = async (req, res) => {
    try {
        const matieres = await models.Matiere.findAll();
        res.status(200).json(matieres);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des matières', error });
    }
};
