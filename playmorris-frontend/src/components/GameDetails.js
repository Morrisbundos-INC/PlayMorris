import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './GameDetails.css';
import { incrementDownload, updateGameRating } from '../services/api';

const GameDetails = ({ game, onClose }) => {
  const [userRating, setUserRating] = useState(0); // Para manejar la calificación del usuario
  const [rating, setRating] = useState(game.rating); // Rating promedio del juego

  const handleDownload = async () => {
    try {
      await incrementDownload(game.id);
      alert('Descarga iniciada.');
    } catch (error) {
      console.error('Error al descargar el juego', error);
    }
  };

  const handleRating = async (newRating) => {
    setUserRating(newRating);
    try {
      const data = await updateGameRating(game.id, newRating);
      setRating(data.newAverageRating); // Actualizamos el promedio de rating
    } catch (error) {
      console.error('Error al actualizar la calificación', error);
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>x</span>
        <h2>{game.name}</h2>
        <p><strong>Núcleo:</strong> {game.description}</p>
        <div className="rating-buttons">
          {/* Renderizado de estrellas */}
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className={`rating-star ${userRating >= star ? 'selected' : ''}`}
              onClick={() => handleRating(star)}
            >
              ★
            </button>
          ))}
                    <span className="rating-number">
            {rating.toFixed(1)}
          </span>
        </div>
        {/* Botón de descarga con la función handleDownload */}
        <a href={game.downloadLink} target="_blank" rel="noopener noreferrer" className="download-button" onClick={handleDownload}>
          Descargar
        </a>

        {/* Sección para calificar el juego */}

      </div>
    </div>,
    document.body // Monta el modal directamente en el body
  );
};

export default GameDetails;
