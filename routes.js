// routes.js
const express = require('express');
const router = express.Router();
const UserController = require('./controllers/userappController');
const MatiereController = require('./controllers/matiereController');
const NoteController = require('./controllers/noteController');
const SessionController = require('./controllers/sessionController');
const BulletinController = require('./controllers/bulletinController');

// Routes pour les utilisateurs
router.post('/users', UserController.createUser);
router.post('/login', UserController.loginUser);
router.get('/users', UserController.getAllUsers);

// Routes pour les matières
router.post('/matieres', MatiereController.createMatiere);
router.get('/matieres', MatiereController.getAllMatieres);

// Routes pour les notes
router.post('/notes', NoteController.createNote);
router.get('/notes/:userId/:sessionId', NoteController.getNotesForStudent);

// Routes pour les sessions
router.post('/sessions', SessionController.createSession);
router.get('/sessions', SessionController.getAllSessions);
router.get('/sessions/:sessionId/active', SessionController.isSessionActive);

// Routes pour les bulletins
router.post('/bulletins', BulletinController.createBulletin);
router.get('/bulletins/:userId/:sessionId', BulletinController.getBulletinForStudent);

module.exports = router;
