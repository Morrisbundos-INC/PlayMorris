const express = require('express');
const { connectDB, sequelize } = require('./db'); // Asegúrate de que `sequelize` esté importado correctamente
const gameRoutes = require('./routes/gameRoutes');
const suggestionRoutes = require('./routes/suggestionRoutes');
const rankingRoutes = require('./routes/rankingRoutes');
const cors = require('cors');
require('dotenv').config();
const Game = require('./models/Game'); // Importa los modelos aquí
const Ranking = require('./models/Ranking');

const app = express();

// Conectar a la base de datos
connectDB();

// Sincronizar los modelos con la base de datos
sequelize.sync({ alter: true })
  .then(() => {
    console.log("Todos los modelos fueron sincronizados correctamente.");
  })
  .catch(err => {
    console.error("Error sincronizando los modelos:", err);
  });


app.use(cors());
app.use(express.json());

// Rutas API
app.use('/api/games', gameRoutes);
app.use('/api/suggestions', suggestionRoutes);
app.use('/api/rankings', rankingRoutes);

// Este bloque solo es necesario para producción, no en desarrollo
/*
app.use(express.static('playmorris-frontend/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'playmorris-frontend', 'build', 'index.html'));
});
*/

// Sincronizar los modelos con la base de datos
sequelize.sync({ alter: true })
  .then(() => {
    console.log("Todos los modelos fueron sincronizados correctamente.");
  })
  .catch(err => {
    console.error("Error sincronizando los modelos:", err);
  });

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
