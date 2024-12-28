// // controllers/NoteController.j
const { Note,Matiere,Userapp,Session } = require('../models');
// Ajouter une note
exports.createNote = async (req, res) => {
  try {
    const { userappId, matiereId, sessionId, note } = req.body;

    // Vérification des données fournies
    if (!userappId || !matiereId || !sessionId || typeof note !== 'number') {
      return res.status(400).json({ message: 'Données invalides : Tous les champs sont requis et la note doit être un nombre.' });
    }

    if (note < 0 || note > 20) {
      return res.status(400).json({ message: 'La note doit être comprise entre 0 et 20.' });
    }

    // Vérifiez si l'utilisateur existe
    const userExists = await Userapp.findByPk(userappId);
    if (!userExists) {
      return res.status(404).json({ message: "L'utilisateur spécifié n'existe pas." });
    }

    // Vérifiez si la matière existe
    const matiereExists = await Matiere.findByPk(matiereId);
    if (!matiereExists) {
      return res.status(404).json({ message: 'La matière spécifiée n’existe pas.' });
    }

    // Vérifiez si la session existe
    const sessionExists = await Session.findByPk(sessionId);
    if (!sessionExists) {
      return res.status(404).json({ message: 'La session spécifiée n’existe pas.' });
    }

    // Créez une nouvelle note
    const newNote = await Note.create({
      userappId,
      matiereId,
      sessionId,
      note,
    });

    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: 'Erreur de création de note', error: error.message });
  }
};

// Récupérer les notes d'un élève pour une session donnée
exports.getNotesForStudent = async (req, res) => {
    try {
        const { userappId, sessionId } = req.params;

        const notes = await models.Note.findAll({
            where: { userappId, sessionId },
            include: [{ model: models.Matiere, as: 'matiere' }],
        });

        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des notes', error: error.message });
    }
};
