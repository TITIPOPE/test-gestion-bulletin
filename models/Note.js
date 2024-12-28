
module.exports = (sequelize, DataTypes) => {
    const Note = sequelize.define('Note', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        note: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    });

    Note.associate = (models) => {
        Note.belongsTo(models.Userapp, { foreignKey: 'userappId', as: 'userapp' });
        Note.belongsTo(models.Matiere, { foreignKey: 'matiereId', as: 'matiere' });
        Note.belongsTo(models.Session, { foreignKey: 'sessionId', as: 'session' });
    };

    return Note;
};
