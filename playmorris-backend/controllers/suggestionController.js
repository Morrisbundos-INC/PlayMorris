// playmorris-backend/controllers/suggestionController.js
const Suggestion = require('../models/Suggestion');

exports.getSuggestions = async (req, res) => {
  try {
    const suggestions = await Suggestion.findAll({ order: [['date', 'DESC']] });
    res.json(suggestions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addSuggestion = async (req, res) => {
  const { name, suggestion } = req.body;
  try {
    const newSuggestion = await Suggestion.create({ name, suggestion });
    res.status(201).json(newSuggestion);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
