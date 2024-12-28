
module.exports = (sequelize, DataTypes) => {
    const Bulletin = sequelize.define('Bulletin', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      average: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    });
  
    Bulletin.associate = (models) => {
      Bulletin.belongsTo(models.Userapp, { foreignKey: 'userappId', as: 'student' });
      Bulletin.belongsTo(models.Session, { foreignKey: 'sessionId', as: 'session' });
    };
  
    return Bulletin;
  };