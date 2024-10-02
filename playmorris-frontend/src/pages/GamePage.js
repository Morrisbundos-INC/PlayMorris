import React, { useState, useEffect } from 'react';
import GameCard from '../components/GameCard';
import './GamePage.css';
import { fetchGames } from '../services/api';

const GamePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames()
      .then(data => setGames(data))
      .catch(error => console.error('Error fetching games:', error));
  }, []);

  const filteredGames = games.filter(game => game.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="game-page">
      <header className="game-page-header">
        <h1 className="page-title">Juegos</h1>
        <div className="search-bar">
          <input
            type="search"
            placeholder="Buscar juegos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </header>
      <div className="game-container">
        {filteredGames.map(game => (
          <GameCard
            key={game.id}
            game={game}  // Asegúrate de pasar todos los datos del juego, incluyendo downloadLink
          />
        ))}
      </div>
    </div>
  );
};

export default GamePage;
