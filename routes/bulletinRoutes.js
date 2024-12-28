
const express = require('express');
const router = express.Router();
const BulletinController = require('../controllers/bulletinController');

// Routes pour les bulletins
router.post('/', BulletinController.createBulletin); // Créer un bulletin
router.get('/:userappId/:sessionId', BulletinController.getBulletinForStudent); // Obtenir un bulletin par élève et session
router.get('/', async (req, res) => { // Obtenir tous les bulletins
  const bulletins = await models.Bulletin.findAll();
  res.json(bulletins);
});

module.exports = router;
