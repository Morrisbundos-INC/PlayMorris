// src/services/api.js

// Definir la URL base del backend a través de la variable de entorno
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

// Obtener la lista de juegos
export const fetchGames = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/games`);
    if (!response.ok) {
      throw new Error('Error fetching games');
    }
    return await response.json(); // Convertir la respuesta a JSON
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error; // Lanzar el error para ser manejado en el componente
  }
};

// Obtener sugerencias
export const fetchSuggestions = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/suggestions`);
    if (!response.ok) {
      throw new Error('Error fetching suggestions');
    }
    return await response.json(); // Convertir la respuesta a JSON
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    throw error; // Lanzar el error para ser manejado en el componente
  }
};

// Obtener rankings
export const fetchRankings = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/rankings`);
    if (!response.ok) {
      throw new Error('Error fetching rankings');
    }
    return await response.json(); // Convertir la respuesta a JSON
  } catch (error) {
    console.error('Error fetching rankings:', error);
    throw error; // Lanzar el error para ser manejado en el componente
  }
};

// Incrementar descargas de un juego
export const incrementDownload = async (gameId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/games/${gameId}/download`, {
      method: 'POST',
    });
    if (!response.ok) {
      throw new Error('Error incrementando las descargas');
    }
  } catch (error) {
    console.error('Error incrementando las descargas:', error);
    throw error; // Lanzar el error para ser manejado en el componente
  }
};

// Actualizar el rating de un juego
export const updateGameRating = async (gameId, newRating) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/games/${gameId}/rate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating: newRating }),
    });
    if (!response.ok) {
      throw new Error('Error actualizando el rating del juego');
    }
    return await response.json(); // Convertir la respuesta a JSON
  } catch (error) {
    console.error('Error actualizando el rating del juego:', error);
    throw error; // Lanzar el error para ser manejado en el componente
  }
};

export const fetchTopGames = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/games/top-games`);
    if (!response.ok) {
      throw new Error('Error fetching top games');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching top games:', error);
    throw error;
  }
};