// playmorris-frontend/src/components/WindowsModal.js
import React from 'react';

const WindowsModal = ({ onClose }) => {
  const handleDownload = (version) => {
    const retroArchLink64 = 'https://buildbot.libretro.com/stable/1.19.1/windows/x86_64/RetroArch.7z'; // Enlace de 64 bits
    const retroArchLink32 = 'https://buildbot.libretro.com/stable/1.19.1/windows/x86/RetroArch.7z'; // Enlace de 32 bits
    const downloadUrl = version === '64' ? retroArchLink64 : retroArchLink32;

    // Crear un enlace dinámico para descargar el archivo
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', `RetroArch-${version}bit.7z`); // Nombre del archivo que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Limpiar el DOM después de la descarga
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Windows 11/10/8.1/8/7</h2>
        <p>Haz clic en los botones para descargar RetroArch directamente.</p>
        <button onClick={() => handleDownload('32')}>Descargar 32 bits</button>
        <button onClick={() => handleDownload('64')}>Descargar 64 bits</button>
      </div>
    </div>
  );
};

export default WindowsModal;
