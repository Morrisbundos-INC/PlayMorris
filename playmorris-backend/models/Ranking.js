const { DataTypes } = require('sequelize');
const { sequelize } = require('../db'); // Asegúrate de importar correctamente sequelize
const Game = require('./Game'); // Asegúrate de que Game se importe correctamente

const Ranking = sequelize.define('Ranking', {
  gameId: {
    type: DataTypes.INTEGER,
    references: {
      model: Game, // Foreign key que apunta a Game
      key: 'id',
    },
    allowNull: false,
    onDelete: 'CASCADE',
  },
  downloads: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

// Establecer las asociaciones
Game.hasMany(Ranking, { foreignKey: 'gameId', onDelete: 'CASCADE' });
Ranking.belongsTo(Game, { foreignKey: 'gameId' });

module.exports = Ranking;
