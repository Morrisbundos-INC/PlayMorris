import React, { useState, useEffect } from 'react';
import './SuggestionsPage.css';
import { fetchSuggestions } from '../services/api';

const SuggestionsPage = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [name, setName] = useState('');
  const [suggestionText, setSuggestionText] = useState('');

  useEffect(() => {
    loadSuggestions();
  }, []);

  const loadSuggestions = () => {
    fetchSuggestions()
      .then(data => setSuggestions(data))
      .catch(error => console.error('Error fetching suggestions:', error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!suggestionText.trim()) {
      alert('La sugerencia no puede estar vacía');
      return;
    }

    const newSuggestion = {
      name: name || 'Anónimo',
      suggestion: suggestionText,
    };

    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/suggestions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSuggestion),
    })
      .then(response => response.json())
      .then(data => {
        // Limpiar el formulario
        setName('');
        setSuggestionText('');

        // Actualizar la lista de sugerencias de forma eficiente
        setSuggestions((prevSuggestions) => [data, ...prevSuggestions]);
      })
      .catch(error => {
        console.error('Error submitting suggestion:', error);
        alert('Ocurrió un error al enviar la sugerencia. Por favor, intenta nuevamente.');
      });
  };

  return (
    <div className="suggestions-container">
      <h1 className="title">Sugerencias</h1>
      <div className="suggestions-content">
        <div className="suggestion-form">
          <h2>Déjanos tu sugerencia</h2>
          <form onSubmit={handleSubmit}>
            <label>Nombre (opcional)</label>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Sugerencia o comentario</label>
            <textarea
              className="suggestion-textarea"
              placeholder="Escribe tu sugerencia o comentario"
              value={suggestionText}
              onChange={(e) => setSuggestionText(e.target.value)}
              rows="4" 
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="suggestions-list">
          <h2>Sugerencias recientes</h2>
          {suggestions.map(suggestion => (
            <div key={suggestion.id} className="suggestion-item">
              <h3>{suggestion.suggestion}</h3>
              <span>{suggestion.name} - {new Date(suggestion.date).toLocaleDateString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestionsPage;
