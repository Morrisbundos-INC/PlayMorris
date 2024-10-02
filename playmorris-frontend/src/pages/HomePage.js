import React from 'react';
import GamePage from './GamePage';
import RankingPage from './RankingPage';
import EmulatorPage from './EmulatorPage';
import WelcomePage from './WelcomePage';

const HomePage = () => {
  return (
    <div>
    {/* Sección de Bienvenida */}
    <section>
      <WelcomePage />
    </section>

      {/* Sección de Juegos */}
      <section>
        <GamePage />
      </section>

      {/* Sección de Clasificación */}
      <section>
        <RankingPage />
      </section>

      {/* Sección de Emulador */}
      <section>
        <EmulatorPage />
      </section>
    </div>
  );
};

export default HomePage;
