// playmorris-backend/routes/suggestionRoutes.js
const express = require('express');
const { getSuggestions, addSuggestion } = require('../controllers/suggestionController');
const router = express.Router();

router.get('/', getSuggestions);
router.post('/', addSuggestion);

module.exports = router;
