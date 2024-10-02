// playmorris-backend/routes/rankingRoutes.js
const express = require('express');
const { getRankings, updateRanking } = require('../controllers/rankingController');
const router = express.Router();

router.get('/', getRankings);
router.put('/:gameId', updateRanking);

module.exports = router;
