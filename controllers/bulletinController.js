// controllers/BulletinController.js
const { Note, Bulletin ,Userapp } = require('../models');
const models = require('../models'); 
exports.createBulletin = async (req, res) => {
    try {
      const { userappId, sessionId } = req.body;
  
      if (!userappId || !sessionId) {
        return res.status(400).json({ message: 'Les champs userappId et sessionId sont requis.' });
      }
        
      const userExists = await Userapp.findByPk(userappId);
      if (!userExists) {
        return res.status(404).json({ message: 'Utilisateur introuvable.' });
      }
      // Vérifiez les notes associées
      
    
      const notes = await Note.findAll({
        where: { userappId, sessionId },
      });
      console.log("Notes trouvées :", notes);
      if (notes.length === 0) {
        return res.status(404).json({ message: 'Aucune note trouvée pour cet élève dans cette session' });
      }
  
      const total = notes.reduce((sum, note) => sum + note.note, 0);
      const average = total / notes.length;
      console.log("Notes trouvées :", average);
      // Créer un nouveau bulletin
      const newBulletin = await Bulletin.create({
        userappId,
        sessionId,
        average,
      });
      res.status(201).json(newBulletin);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la création du bulletin.', error: error.message });
    }
  };
// Récupérer un bulletin pour un élève et une session donnée
exports.getBulletinForStudent = async (req, res) => {
  try {
      const { userappId, sessionId } = req.params;

      // Récupérer les notes avec leurs matières
      const notes = await models.Note.findAll({
          where: { userappId, sessionId },
          include: [
              {
                  model: models.Matiere,
                  as: 'matiere',
                  attributes: ['name'], // Récupérer seulement le nom de la matière
              },
          ],
      });

      if (notes.length === 0) {
          return res.status(404).json({ message: 'Aucune note trouvée pour cet élève dans cette session.' });
      }

      // Calculer les détails par matière
      const details = notes.map((note) => ({
          matiere: note.matiere.name,
          notes: [note.note], // Ajouter d'autres notes si nécessaire
          moyenne: note.note, // Actuellement, une seule note. Mettre la moyenne réelle si plusieurs.
      }));

      // Calculer la moyenne générale
      const moyenneGenerale = notes.reduce((sum, note) => sum + note.note, 0) / notes.length;

      // Formater la réponse
      const response = {
          userappId: parseInt(userappId),
          sessionId: parseInt(sessionId),
          details,
          moyenneGenerale,
      };

      res.status(200).json(response);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la récupération du bulletin.', error });
  }
};
