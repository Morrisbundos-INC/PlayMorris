const express = require('express');
const { getGames, addGame, updateGame, deleteGame, incrementDownloads, rateGame, getTopGames } = require('../controllers/gameController');
const router = express.Router();

router.get('/', getGames);
router.post('/', addGame);
router.put('/:id', updateGame);
router.delete('/:id', deleteGame);
router.post('/:id/download', incrementDownloads);
router.post('/:id/rate', rateGame);
router.get('/top-games', getTopGames);  // Ruta para los juegos más descargados

module.exports = router;
