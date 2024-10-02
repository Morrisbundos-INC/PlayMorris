import './Footer.css';
import { Link } from 'react-router-dom';
import React from 'react';
import './Footer.css';
import logotipo from '../assets/images/logotipo.png';
import x from '../assets/images/x.png';
import youtube from '../assets/images/youtube.webp';
import instagram from '../assets/images/instagram.png';
import donar from '../assets/images/donar.png';

function Footer({ openModal }) {
  return (
    <footer className="footer">
      <div className="logo">
        <Link to="/">
          <img src={logotipo} alt="Play Morris Logo" className="navbar-logo" />
        </Link>
      </div>
      <div className="footer-center">
        <a href="https://twitter.com/morrisbund19936" target="_blank" rel="noopener noreferrer">
          <img src={x} alt="Logo X" className="footer-x" />
        </a>
        <a href="https://www.youtube.com/@MorrisbundosINC" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt="Logo facebook" className="footer-facebook" />
        </a>
        <a href="https://www.instagram.com/playmorris.retro/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Logo instagram" className="footer-instagram" />
        </a>
      </div>
      <div className="footer-right">
        <button onClick={openModal} className="donate-button">
          <img src={donar} alt="Logo donar" className="footer-donar"/>
          <span>Donar</span>
        </button>
        <p>Todos los derechos reservados © 2024 PlayMorris</p>
      </div>
    </footer>
  );
}

export default Footer;
