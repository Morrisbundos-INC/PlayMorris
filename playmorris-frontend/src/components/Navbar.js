import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logotipo from '../assets/images/logotipo.png';

const Navbar = ({ openModal }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logotipo} alt="Play Morris Logo" className="navbar-logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/games">Juegos</Link>
        <Link to="/suggestions">Sugerencias</Link>
        <Link to="/ranking">Clasificación</Link>
        <Link to="/emulator">Emulador</Link>
        {/* Botón que abre el modal en lugar de redirigir */}
        <button onClick={openModal} className="donate-button">Donar</button>
      </div>
    </nav>
  );
};

export default Navbar;
