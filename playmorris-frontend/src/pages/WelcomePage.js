import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';
import welcome from '../assets/images/welcome.png';

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="descripcion">
        <p>En PlayMorris creemos en la magia y nostalgia de los videojuegos retro. Nuestra plataforma es
            un espacio dedicado a los gamers de la vieja escuela, donde podrás descargar toneladas
            de ROMs de tus juegos favoritos de forma gratuita.</p>
        <div className="buttons-container">
          <a href="/Games" className="btn bg-yellow-400 hover:bg-yellow-300 text-black">
            Explorar Juegos
          </a>
          <a href="/Emulator" className="btn bg-cyan-400 hover:bg-cyan-300 text-black">
            Descargar Emulador
          </a>
        </div>
      </div>
      
      <div className="welcome">
        <Link to="/">
          <img src={welcome} alt="Play Morris Logo" className="welcome" />
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
