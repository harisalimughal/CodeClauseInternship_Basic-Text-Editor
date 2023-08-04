// AboutPanel.js

import React from 'react';


const AboutPanel = ({ onClose }) => {
  return (
    <div className="about-panel-container">
      <div className="about-panel">
        <h2>About Haris' Text Editor</h2>
        <p>Version 1.0.0</p>
        <p>© Silicon Harry Coporation.<br/> &nbsp;&nbsp;&nbsp; All rights reserved.</p>
        <p>
          This text editor is a simple application built with React. It allows you to write and
          edit text conveniently. Use it for taking notes, writing drafts, or anything you like!
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AboutPanel;
