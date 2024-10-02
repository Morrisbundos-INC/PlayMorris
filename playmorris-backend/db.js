const { Sequelize } = require('sequelize');
require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env

// Crear una instancia de Sequelize para conectarse a PostgreSQL usando la URL de conexión de la variable de entorno
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false, // Desactiva el registro de las consultas SQL en la consola
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión con PostgreSQL ha sido establecida con éxito.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
    process.exit(1); // Termina el proceso si falla la conexión
  }
};

module.exports = { sequelize, connectDB };
