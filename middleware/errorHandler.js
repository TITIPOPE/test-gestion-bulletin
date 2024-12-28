// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(`[Error] ${err.message}`);

    // Vérifier si l'erreur est une erreur connue
    const statusCode = err.statusCode || 500; // 500 si aucune erreur spécifique n'est définie
    const errorMessage = err.message || 'Erreur interne du serveur.';

    res.status(statusCode).json({
        success: false,
        error: errorMessage,
    });
};

module.exports = errorHandler;
