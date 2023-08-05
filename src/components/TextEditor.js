// TextEditor.js
import React, { useState } from 'react';
import Menu from './MenuBar';
import Footer from './Footer';
import CloseButton from './CloseButton';

  const TextEditor = () => {
  const [text, setText] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [textStack, setTextStack] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCloseEditor = () => {
    console.log('Editor closed');
    setIsMinimized(true);
  };

  const handleUndo = () => {
    if (textStack.length > 0) {
      const previousText = textStack[textStack.length - 1];
      setText(previousText);
      setTextStack(textStack.slice(0, -1));
    }
  };

  return (
    <div className={`container ${isMinimized ? 'minimized' : ''}`}>
      {!isMinimized && (
        <>
          <Menu text={text} onClose={handleCloseEditor} onUndo={handleUndo} />
          <CloseButton onClose={handleCloseEditor} />
            <textarea
            id="text-area"
              value={text}
               onChange={(event) => {
                setTextStack(text); // Save the previous text before making any changes
                handleChange(event); // Call the handleChange function to update the text
              }}
              autoFocus
            />
          <Footer />
        </>
      )}
    </div>
  );
};

export default TextEditor;




