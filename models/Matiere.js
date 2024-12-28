// models/Matiere.js
module.exports = (sequelize, DataTypes) => {
    const Matiere = sequelize.define('Matiere', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Matiere;
};
