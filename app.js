const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

// Middleware
app.use(bodyParser.json());

// Import des routes
const UserappRoutes = require('./routes/userappRoutes');
const matiereRoutes = require('./routes/matiereRoutes');
const noteRoutes = require('./routes/noteRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const bulletinRoutes = require('./routes/bulletinRoutes');

// Utilisation des routes
app.use('/api/userapps', UserappRoutes);
app.use('/api/matieres', matiereRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/bulletins', bulletinRoutes);


// Synchronisation de la base de données
sequelize.sync()
    .then(() => console.log('Base de données connectée'))
    .catch((err) => console.error('Erreur de connexion :', err));
// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
