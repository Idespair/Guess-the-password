// ModalFim.tsx
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

interface ModalFimProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onPlayNewGame: () => void; // Add prop for Play New Game action
}

const ModalFim: React.FC<ModalFimProps> = ({ isOpen, onRequestClose, onPlayNewGame }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Congrats Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <h2>BOA, AMOR!!!!</h2>
        <img
          src=".\src\assets\modal.gif"
          alt="Cute Kitten"
          className="kitten-image"
        />
        {/* Change button text and onClick handler */}
        <button onClick={onPlayNewGame} className="play-new-game-button">
          Play New Game
        </button>
      </div>
    </Modal>
  );
};

export default ModalFim;
