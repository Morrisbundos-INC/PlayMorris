import React from 'react';
import './DonateModal.css';  // Importamos el archivo CSS
import paypalLogo from '../assets/images/paypal-logo.png';
import yapelLogo from '../assets/images/yape-logo.png';


const DonateModal = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Selecciona tu método de donación</h2>
        <div className="payment-options">
          {/* Botón para Yape */}
          <button className="payment-button yape">
            <img src={yapelLogo} alt="Yape Logo" className="payment-logo" />
            Donar con Yape
          </button>

          {/* Botón para PayPal */}
          <a 
            href="https://www.paypal.com/donate/?hosted_button_id=VVHHJ5H4RWBLL" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="payment-button paypal"
            style={{ textDecoration: 'none' }} 
          >
            <img src={paypalLogo} alt="PayPal Logo" className="payment-logo" />
            Donar con PayPal
          </a>
        </div>
        {/* Botón para cerrar el modal */}
        <button className="close-button" onClick={closeModal}>x</button>
      </div>
    </div>
  );
};

export default DonateModal;
