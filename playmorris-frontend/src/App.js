import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import SuggestionsPage from './pages/SuggestionsPage';
import RankingPage from './pages/RankingPage';
import EmulatorPage from './pages/EmulatorPage';
import DonateModal from './components/DonateModal'; // Cambiado de DonatePage a DonateModal
import './App.css'; 

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <Router>
        <Navbar openModal={openModal} /> {/* Pasamos la función para abrir el modal */}
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games" element={<GamePage />} />
            <Route path="/suggestions" element={<SuggestionsPage />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/emulator" element={<EmulatorPage />} />
          </Routes>
        </div>
        <Footer openModal={openModal} /> {/* Pasamos la función para abrir el modal desde el footer */}
      </Router>

      {isModalOpen && (
        <div className="modal-overlay">
          <DonateModal closeModal={closeModal} />
        </div>
      )}
    </div>
  );
}

export default App;
