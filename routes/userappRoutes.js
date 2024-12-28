// const express = require('express');
// const router = express.Router();
// const { Userapp } = require('../models');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// // Route de connexion
// router.post('/login', async (req, res) => {
//     const { Userappname, password } = req.body;

//     // Vérification des informations d'identification
//     const Userapp = await Userapp.findOne({ where: { Userappname } });
//     if (!Userapp) {
//         return res.status(404).json({ error: 'Utilisateur non trouvé' });
//     }

//     // Vérification du mot de passe
//     const isMatch = await bcrypt.compare(password, Userapp.password);
//     if (!isMatch) {
//         return res.status(401).json({ error: 'Mot de passe incorrect' });
//     }

//     // Création du token JWT
//     const token = jwt.sign({ id: Userapp.id, role: Userapp.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.json({ token });
// });


// // Obtenir tous les utilisateurs
// router.get('/', async (req, res) => {
//     const Userapps = await Userapp.findAll();
//     res.json(Userapps);
// });

// // Obtenir un utilisateur par ID
// router.get('/:id', async (req, res) => {
//     const Userapp = await Userapp.findByPk(req.params.id);
//     if (!Userapp) return res.status(404).json({ error: 'Utilisateur introuvable' });
//     res.json(Userapp);
// });

// // Ajouter un utilisateur
// router.post('/', async (req, res) => {
//     const newUserapp = await Userapp.create(req.body);
//     res.status(201).json(newUserapp);
// });

// // Mettre à jour un utilisateur
// router.put('/:id', async (req, res) => {
//     const Userapp = await Userapp.findByPk(req.params.id);
//     if (!Userapp) return res.status(404).json({ error: 'Utilisateur introuvable' });
//     await Userapp.update(req.body);
//     res.json(Userapp);
// });

// // Supprimer un utilisateur
// router.delete('/:id', async (req, res) => {
//     const Userapp = await Userapp.findByPk(req.params.id);
//     if (!Userapp) return res.status(404).json({ error: 'Utilisateur introuvable' });
//     await Userapp.destroy();
//     res.json({ message: 'Utilisateur supprimé avec succès' });
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const { Userapp } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Route de connexion
router.post('/login', async (req, res) => {
    const { name, password } = req.body;

    // Vérification des informations d'identification
    const Userapps = await Userapp.findOne({ where: { name } });
    if (!Userapps) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    // Vérification du mot de passe
    const isMatch = await bcrypt.compare(password, Userapps.password);
    if (!isMatch) {
        return res.status(401).json({ error: 'Mot de passe incorrect' });
    }

    // Création du token JWT
    const token = jwt.sign({ id: Userapps.id, role: Userapps.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
});

// Obtenir tous les utilisateurs
router.get('/', async (req, res) => {
    const Userapps = await Userapp.findAll();
    res.json(Userapps);
});

// Obtenir un utilisateur par ID
router.get('/:id', async (req, res) => {
    const Userapp = await Userapp.findByPk(req.params.id);
    if (!Userapp) return res.status(404).json({ error: 'Utilisateur introuvable' });
    res.json(Userapp);
});

// Ajouter un utilisateur
router.post('/', async (req, res) => {
    try {
        const newUserapp = await Userapp.create(req.body);
        res.status(201).json(newUserapp);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Mettre à jour un utilisateur
router.put('/:id', async (req, res) => {
    const Userapp = await Userapp.findByPk(req.params.id);
    if (!Userapp) return res.status(404).json({ error: 'Utilisateur introuvable' });
    await Userapp.update(req.body);
    res.json(Userapp);
});

// Supprimer un utilisateur
router.delete('/:id', async (req, res) => {
    const Userapp = await Userapp.findByPk(req.params.id);
    if (!Userapp) return res.status(404).json({ error: 'Utilisateur introuvable' });
    await Userapp.destroy();
    res.json({ message: 'Utilisateur supprimé avec succès' });
});

module.exports = router;