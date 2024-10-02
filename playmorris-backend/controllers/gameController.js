const Game = require('../models/Game');
const Ranking = require('../models/Ranking'); // Asegúrate de tener el modelo Ranking

// Obtener todos los juegos
exports.getGames = async (req, res) => {
  try {
    const games = await Game.findAll();
    res.json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Añadir un nuevo juego
exports.addGame = async (req, res) => {
  const { name, rating, ratingCount, description, downloadLink, image } = req.body;
  try {
    const newGame = await Game.create({ name, rating, ratingCount, description, downloadLink, image });
    res.status(201).json(newGame);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Actualizar un juego
exports.updateGame = async (req, res) => {
  const { id } = req.params;
  const { name, rating, ratingCount, description, downloadLink, image } = req.body;
  try {
    const game = await Game.findByPk(id);
    if (!game) return res.status(404).json({ message: 'Game not found' });

    game.name = name;
    game.rating = rating;
    game.ratingCount = ratingCount;
    game.description = description;
    game.downloadLink = downloadLink;
    game.image = image;

    await game.save();
    res.json(game);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Eliminar un juego
exports.deleteGame = async (req, res) => {
  const { id } = req.params;
  try {
    const game = await Game.findByPk(id);
    if (!game) return res.status(404).json({ message: 'Game not found' });

    await game.destroy();
    res.json({ message: 'Game deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Incrementar las descargas
exports.incrementDownloads = async (req, res) => {
  try {
    // Buscar el juego por su ID
    const game = await Game.findByPk(req.params.id);
    if (!game) {
      console.error('Juego no encontrado');
      return res.status(404).json({ message: 'Juego no encontrado' });
    }

    // Buscar el ranking asociado al juego
    let ranking = await Ranking.findOne({ where: { gameId: game.id } });

    // Si no existe un ranking, crearlo
    if (!ranking) {
      console.log('Ranking no encontrado, creando uno nuevo');
      ranking = await Ranking.create({ gameId: game.id, downloads: 1 });
    } else {
      // Si existe, incrementar las descargas
      console.log('Incrementando descargas del ranking existente');
      ranking.downloads += 1;
      await ranking.save();
    }

    res.status(200).json({ message: 'Descarga incrementada', downloads: ranking.downloads });
  } catch (error) {
    console.error('Error incrementando las descargas:', error);
    res.status(500).json({ error: 'Error al incrementar descargas' });
  }
};

// Actualizar la calificación del juego
exports.rateGame = async (req, res) => {
  try {
    const { rating } = req.body;
    const game = await Game.findByPk(req.params.id);
    if (!game) return res.status(404).json({ message: 'Game not found' });

    // Calcular nuevo promedio de rating
    const newRatingCount = game.ratingCount + 1;
    const newAverageRating = ((game.rating * game.ratingCount) + rating) / newRatingCount;

    game.rating = newAverageRating;
    game.ratingCount = newRatingCount;
    await game.save();

    res.status(200).json({ newAverageRating, newRatingCount });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el rating' });
  }
};


// Obtener los 5 juegos más descargados con el nombre del juego
exports.getTopGames = async (req, res) => {
  try {
    const topGames = await Ranking.findAll({
      order: [['downloads', 'DESC']],
      limit: 5,
      include: [
        {
          model: Game, // Relación con el modelo Game
          attributes: ['name', 'rating'], // Solo traer el nombre y rating del juego
        }
      ]
    });

    res.json(topGames);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};