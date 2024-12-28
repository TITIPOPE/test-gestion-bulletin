// controllers/UserappController.js
const { models } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Créer un nouvel utilisateur
exports.createUserapp = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUserapp = await models.Userapp.create({
            name,
            email,
            password: hashedPassword,
            role,
        });

        res.status(201).json(newUserapp);
    } catch (error) {
        res.status(500).json({ message: 'Erreur de création d\'utilisateur', error });
    }
};

// Récupérer tous les utilisateurs
exports.getAllUserapps = async (req, res) => {
    try {
        const Userapps = await models.Userapp.findAll();
        res.status(200).json(Userapps);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs', error });
    }
};

// Authentifier un utilisateur
exports.loginUserapp = async (req, res) => {
    try {
        const { email, password } = req.body;

        const Userapp = await models.Userapp.findOne({ where: { email } });

        if (!Userapp) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        const isMatch = await bcrypt.compare(password, Userapp.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Mot de passe incorrect' });
        }

        // Générer un token
        const token = jwt.sign({ UserappId: Userapp.id, role: Userapp.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Erreur d\'authentification', error });
    }
};
