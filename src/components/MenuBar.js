// MenuBar.js
import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import AboutPanel from './AboutPanel';

  const Menu = ({text,onClose,onUndo}) => {
  const [showSaveMenu, setShowSaveMenu] = useState(false);
  const [showPrintMenu, setShowPrintMenu] = useState(false);
  const [showHelpMenu, setShowHelpMenu] = useState(false);
  const [showEditMenu, setShowEditMenu] = useState(false);
  const [showFormatMenu, setShowFormatMenu] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showAboutPanel, setShowAboutPanel] = useState(false);
  

   const handleSaveButtonClick = () => {
     setShowSaveMenu(!showSaveMenu);
   };

   const handlePrintButtonClick = () => {
     setShowPrintMenu(!showPrintMenu);
   };

   const handleHelpButtonClick = () => {
     setShowHelpMenu(!showHelpMenu);
   };

   const handleEditButtonClick = () => {
     setShowEditMenu(!showEditMenu);
   };

   const handleFormatButtonClick = () => {
     setShowFormatMenu(!showFormatMenu);
   };

   const handleViewButtonClick = () => {
     setIsFullScreen(!isFullScreen);
   };

   const handleSaveMenuOptionClick = (option) => {
     if (option === 'save') {
       const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
       saveAs(blob, 'myFile.txt');
     }
   };

     const handleSaveasMenuOptionClick = (option) => {
       if (option === 'saveas') {
           const fileName = window.prompt('Enter file name:');
             if (fileName) {
               const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
                saveAs(blob, fileName);
            }
        } 
     };

    const handlePrintMenuOptionClick = (option) => {
      setShowPrintMenu(false);
      window.print();
   };

   const handleHelpMenuOptionClick = (option) => {
     setShowHelpMenu(false);
     window.location.href='https://github.com/harisalimughal/CodeClauseInternship_Basic-Text-Editor'
  }

   const handleAboutMenuOptionClick = (option) => {
     setShowAboutPanel(true);
  };

   const handleCloseAboutPanel = () => {
      setShowAboutPanel(false);
  };

   const handleUndoClick = () => {
     onUndo(); // Call the onUndo prop passed from TextEditor when Undo is clicked
     setShowEditMenu(false); // Close Edit menu after performing Undo
   };

   const handleFontMenuOptionClick = () => {
      setShowHelpMenu(false);
        const fontStyle = window.prompt('Enter font style (e.g., "Arial", "Verdana"):');
          if (fontStyle) {
            document.getElementById('text-area').style.fontFamily = fontStyle;
    }
  };
  
  
  

  const handleViewMenuOptionClick = (option) => {
      setShowHelpMenu(false);
          if (option === 'fullscreen') {
             if (document.fullscreenElement) {
                  document.exitFullscreen();
                  setIsFullScreen(false);
           } 
           else {
           document.documentElement.requestFullscreen().catch((err) => {
           console.log('Error attempting to enable full-screen mode:', err);
        });
          setIsFullScreen(true);
      }
    }
  };

    const handleCloseEditor = () => {
       if (onClose) {
        onClose();
    }
  };

  
  return (
    
    <div className="menu">
       
      <div className="dropdown">
        <button onClick={handleSaveButtonClick}>File</button>
        {showSaveMenu && (
          <ul>
            <li onClick={() => handleSaveMenuOptionClick('save')}>Save</li>
            <li onClick={() => handleSaveasMenuOptionClick('saveas')}>Save As</li>
          </ul>
        )}
      </div>
      <div className="dropdown">
        <button onClick={handlePrintButtonClick}>Print</button>
        {showPrintMenu && (
          <ul>
            <li onClick={() => handlePrintMenuOptionClick('print')}>Print As...</li>
          </ul>
        )}
      </div>

   <div className="dropdown">
      <button onClick={handleEditButtonClick}>Edit</button>
      {showEditMenu && (
        <ul>
          <li onClick={() => handleUndoClick('Undo')}>Undo</li>      
          </ul>
      )} 
   </div>
       <div className="dropdown">
         <button onClick={handleFormatButtonClick}>Format</button>
         {showFormatMenu && (
           <ul>
             <li onClick={() => handleFontMenuOptionClick('Font')}>Font</li>
           </ul>
        )}
      </div>
      <div className="dropdown">
         <button onClick={handleViewButtonClick}>View</button>
           {isFullScreen && (
           <ul>
             <li onClick={() => handleViewMenuOptionClick('fullscreen')}>Fullscreen</li>
           </ul>
        )}
       </div>
       <div className="dropdown">
        <button onClick={handleHelpButtonClick}>Help</button>
        {showHelpMenu && (
          <ul>
            <li onClick={() => handleHelpMenuOptionClick('View Help')}>View Help</li>
            <li onClick={handleAboutMenuOptionClick}>About</li>
      {showAboutPanel && <AboutPanel onClose={handleCloseAboutPanel} />}
          </ul>
        )}
      </div>
      <button className="close" onClick={handleCloseEditor}>
        Exit
      </button>

      <div className="tag " > {/* Empty flex item to push content to the right */}
      Haris' TextEditor
    </div>
    </div>
  );
};

export default Menu;
