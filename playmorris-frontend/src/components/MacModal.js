// playmorris-frontend/src/components/MacModal.js
import React from 'react';

const MacModal = ({ onClose }) => {
  const handleDownload = () => {
    const retroArchLinkMac = 'https://buildbot.libretro.com/stable/1.19.1/apple/osx/universal/RetroArch_Metal.dmg'; // Enlace universal para macOS

    // Crear un enlace dinámico para descargar el archivo
    const link = document.createElement('a');
    link.href = retroArchLinkMac;
    link.setAttribute('download', 'RetroArch_Metal.dmg'); // Nombre del archivo que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Limpiar el DOM después de la descarga
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>macOS</h2>
        <p>Haz clic en el botón para descargar RetroArch directamente.</p>
        <button onClick={handleDownload}>Descargar RetroArch para macOS</button>
      </div>
    </div>
  );
};

export default MacModal;
