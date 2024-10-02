import React from 'react';

const IosModall = ({ onClose }) => {
  const handleDownloadiOS = () => {
    const iosLink = 'https://buildbot.libretro.com/nightly/apple/ios9/RetroArchiOS9.ipa'; // Enlace directo para descargar el IPA
    const link = document.createElement('a');
    link.href = iosLink;
    link.setAttribute('download', 'RetroArchiOS9.ipa'); // Nombre del archivo que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Limpiar el DOM después de la descarga
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>iOS</h2>
        <p>Haz clic en el botón para descargar RetroArch para iOS (IPA):</p>
        <button onClick={handleDownloadiOS}>Descargar IPA para iOS</button>
      </div>
    </div>
  );
};

export default IosModall;
