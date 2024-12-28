const jwt = require('jsonwebtoken');

// Middleware pour vérifier le token JWT
const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ error: 'Accès refusé. Token manquant.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.Userapp = decoded; // Ajouter les informations de l'utilisateur à la requête
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Token invalide ou expiré.' });
    }
};

module.exports = authenticate;
