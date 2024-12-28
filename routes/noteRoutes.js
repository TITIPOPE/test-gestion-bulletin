
const express = require('express');
const router = express.Router();
const NoteController = require('../controllers/noteController');

// Routes pour les notes
router.post('/', NoteController.createNote);
router.get('/:userappId/:sessionId', NoteController.getNotesForStudent);

module.exports = router;
