// controllers/SessionController.js
const { models } = require('../models');

// Ouvrir une nouvelle session
exports.createSession = async (req, res) => {
    try {
        const { name,startDate, endDate } = req.body;

        const newSession = await models.Session.create({
            name,
            startDate,
            endDate,
            isActive: true,
        });

        res.status(201).json(newSession);
    } catch (error) {
        res.status(500).json({ message: 'Erreur de création de session', error });
    }
};

// Récupérer toutes les sessions
exports.getAllSessions = async (req, res) => {
    try {
        const sessions = await models.Session.findAll();
        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des sessions', error });
    }
};

// Vérifier si une session est active
exports.isSessionActive = async (req, res) => {
    try {
        const { sessionId } = req.params;

        const session = await models.Session.findByPk(sessionId);

        if (!session) {
            return res.status(404).json({ message: 'Session non trouvée' });
        }

        res.status(200).json({ isActive: session.isActive });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la vérification de la session', error });
    }
};
