import React, { useState } from 'react';
import './GameCard.css';
import GameDetails from './GameDetails';
import { incrementDownload } from '../services/api'; // Ruta corregida

const GameCard = ({ game }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [rating] = useState(game.rating); // Mantenemos solo el promedio de calificación

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  const handleDownload = async () => {
    try {
      await incrementDownload(game.id);
      alert('Descarga iniciada.');
    } catch (error) {
      console.error('Error al descargar el juego', error);
    }
  };

  return (
    <div className="game-card">
      <img src={game.image} alt={game.name} className="game-image" />
      <div className="game-info">
        <h3>
          {game.name} <span className="rating-number"> I {rating.toFixed(1)} ★</span> {/* Mostramos el nombre del juego y el promedio */}
        </h3>
        <div className="game-rating"></div>
        <a
          href={game.downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="game-button"
          onClick={handleDownload}
        >
          Descargar
        </a>
        <button className="game-button" onClick={handleShowDetails}>
          Ver Más
        </button>
      </div>
      {showDetails && <GameDetails game={game} onClose={handleCloseDetails} />}
    </div>
  );
};

export default GameCard;
