// playmorris-backend/controllers/rankingController.js
const Ranking = require('../models/Ranking');

exports.getRankings = async (req, res) => {
  try {
    const rankings = await Ranking.findAll();
    res.json(rankings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateRanking = async (req, res) => {
  const { gameId } = req.params;
  const { downloads, likes } = req.body;
  try {
    const ranking = await Ranking.findOne({ where: { gameId } });
    if (!ranking) return res.status(404).json({ message: 'Ranking not found' });
    
    ranking.downloads = downloads;
    ranking.likes = likes;
    await ranking.save();
    
    res.json(ranking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
