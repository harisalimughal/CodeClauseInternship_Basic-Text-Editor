// CloseButton.js
import React from 'react';

const CloseButton = ({ onClose }) => {
  const handleCloseEditor = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="close-button">
      <button className="close" onClick={handleCloseEditor}>
        &times;
      </button>
    </div>
  );
};

export default CloseButton;
