// src/components/LinuxModal.js
import React, { useState } from 'react';
import './LinuxModal.css'; // Importa el archivo CSS

const LinuxModal = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('sudo snap install retroarch');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Vuelve a "Copiar" después de 2 segundos
  };

  const handleDownloadFlatpak = () => {
    const retroArchLinkFlatpak = 'https://flathub.org/repo/appstream/org.libretro.RetroArch.flatpakref'; // Enlace para Flatpak
    const link = document.createElement('a');
    link.href = retroArchLinkFlatpak;
    link.setAttribute('download', 'RetroArch.flatpakref'); // Nombre del archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Linux</h2>
        <p>Haz clic en los botones para instalar RetroArch en Linux:</p>
        
        <div className="command-container">
          <code>sudo snap install retroarch</code> {/* Muestra el comando */}
          <button onClick={handleCopy} className="copy-button">
            {copied ? 'Copiado!' : 'Copiar'}
          </button>
        </div>

        <button onClick={handleDownloadFlatpak}>Descargar Flatpak</button>
      </div>
    </div>
  );
};

export default LinuxModal;
