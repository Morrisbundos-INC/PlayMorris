import React, { useState } from 'react';
import WindowsModal from '../components/WindowsModal';
import MacModal from '../components/MacModal';
import LinuxModal from '../components/LinuxModal';
import AndroidModal from '../components/AndroidModal';
import IosModall from '../components/IosModall';  // Actualiza el nombre aquí
import './EmulatorPage.css';

const EmulatorPage = () => {
  const [showWindowsModal, setShowWindowsModal] = useState(false);
  const [showMacModal, setShowMacModal] = useState(false);
  const [showLinuxModal, setShowLinuxModal] = useState(false);
  const [showAndroidModal, setShowAndroidModal] = useState(false);
  const [showIosModal, setShowIosModal] = useState(false); // Estado para el modal de iOS

  const openWindowsModal = () => setShowWindowsModal(true);
  const closeWindowsModal = () => setShowWindowsModal(false);

  const openMacModal = () => setShowMacModal(true);
  const closeMacModal = () => setShowMacModal(false);

  const openLinuxModal = () => setShowLinuxModal(true);
  const closeLinuxModal = () => setShowLinuxModal(false);

  const openAndroidModal = () => setShowAndroidModal(true);
  const closeAndroidModal = () => setShowAndroidModal(false);

  const openIosModal = () => setShowIosModal(true);  // Abrir el modal de iOS
  const closeIosModal = () => setShowIosModal(false); // Cerrar el modal de iOS

  const handleDownload = (bitVersion) => {
    console.log(`Descarga Windows ${bitVersion} bits iniciada`);
    closeWindowsModal();
  };

  return (
    <div className="emulator-container">
      <h1>Emulador</h1>
      <p className="chooseemulator">Elige tu dispositivo para el emulador:</p>
      <div className="emulator-cards">
        <div className="card">
          <h2>Escritorio</h2>
          <button onClick={openWindowsModal}>Windows</button>
          <button onClick={openMacModal}>macOS</button>
          <button onClick={openLinuxModal}>Linux</button>
        </div>
        <div className="card">
          <h2>Móvil</h2>
          <button onClick={openAndroidModal}>Android</button>
          <button onClick={openIosModal}>iOS</button> {/* Botón para abrir el modal de iOS */}
        </div>
      </div>
      {/* Implementación de los modales */}
      {showWindowsModal && <WindowsModal onClose={closeWindowsModal} onDownload={handleDownload} />}
      {showMacModal && <MacModal onClose={closeMacModal} />}
      {showLinuxModal && <LinuxModal onClose={closeLinuxModal} />}
      {showAndroidModal && <AndroidModal onClose={closeAndroidModal} />}
      {showIosModal && <IosModall onClose={closeIosModal} />} {/* Modal de iOS */}
    </div>
  );
};

export default EmulatorPage;
