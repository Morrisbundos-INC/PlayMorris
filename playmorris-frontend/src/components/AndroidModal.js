// playmorris-frontend/src/components/AndroidModal.js
import React from 'react';

const AndroidModal = ({ onClose }) => {
  const handleDownloadAndroid = () => {
    const androidLink = 'https://buildbot.libretro.com/stable/1.19.1/android/RetroArch_aarch64.apk'; // Enlace directo para descargar el APK
    const link = document.createElement('a');
    link.href = androidLink;
    link.setAttribute('download', 'RetroArch_aarch64.apk'); // Nombre del archivo que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Limpiar el DOM después de la descarga
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Android</h2>
        <p>Haz clic en el botón para descargar RetroArch para Android (APK):</p>
        <button onClick={handleDownloadAndroid}>Descargar APK para Android</button>
      </div>
    </div>
  );
};

export default AndroidModal;
