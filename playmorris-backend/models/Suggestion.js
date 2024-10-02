const { DataTypes } = require('sequelize');
const { sequelize } = require('../db'); // Asegúrate de que la ruta sea correcta

const Suggestion = sequelize.define('Suggestion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  suggestion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'Suggestions',
  schema: 'public',
  timestamps: true, // Esto creará automáticamente createdAt y updatedAt
});

module.exports = Suggestion;