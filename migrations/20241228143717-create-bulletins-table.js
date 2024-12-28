module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Créer la table 'bulletins'
    await queryInterface.createTable('bulletins', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userappId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sessionId: {
        type: Sequelize.INTEGER,
        allowNull: false,   
      },
      average: {
        type: Sequelize.FLOAT,
        allowNull: false, 
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Supprimer la table 'bulletins' si la migration est annulée
    await queryInterface.dropTable('bulletins');
  },
};