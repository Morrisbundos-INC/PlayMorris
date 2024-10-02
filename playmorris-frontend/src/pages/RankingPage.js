import React, { useEffect, useState } from 'react';
import './RankingPage.css';
import { fetchTopGames } from '../services/api'; // Asegúrate de que api.js tenga la nueva función

const RankingPage = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTopGames(); // Llamada al nuevo endpoint para obtener los 5 juegos más descargados
        setRankings(data);
      } catch (error) {
        console.error('Error al obtener los rankings:', error);
      }
    };

    fetchData(); // Llamada para obtener los rankings
  }, []);

  return (
    <div className="ranking-page">
      <h1>Ranking de Juegos</h1>
      <p>Explora los juegos más descargados:</p>
      <table>
        <thead>
          <tr>
            <th>Juego</th>
            <th>Descargas Totales</th>
            <th>Promedio de Rating</th>
          </tr>
        </thead>
        <tbody>
        {rankings.map((ranking) => (
          <tr key={ranking.id}>
          <td>{ranking.Game ? ranking.Game.name : 'Nombre no disponible'}</td>
          <td>{ranking.downloads}</td>
          <td  td>{ranking.Game && ranking.Game.rating ? ranking.Game.rating.toFixed(1) : 'N/A'} / 5</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankingPage;
