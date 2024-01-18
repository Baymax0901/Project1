import React, { useState } from 'react';
import './out.css'; // Assuming you save the CSS as App.css

const Out = () => {
    const [popupStyle, setPopupStyle] = useState({ display: 'none' });
  
    const handleNoButtonClick = () => {
      const noButton = document.getElementById("no-btn");
      noButton.style.position = "absolute";
      noButton.style.left = Math.random() * 80 + "vw";
      noButton.style.top = Math.random() * 80 + "vh";
    };
    const color={color:'red'};
    const handleYesButtonClick = () => {
      setPopupStyle({ display: 'block' });
    };
  
    const handlePopupClick = () => {
      setPopupStyle({ display: 'none' });
    };
  
    return (
      <div className="container">
        <h1>Will you come on a date with me?</h1>
        <div className="buttons">
          <button id="no-btn" onMouseOver={handleNoButtonClick}>
            No
          </button>
          <button id="yes-btn" onClick={handleYesButtonClick}>
            Yes
          </button>
        </div>
        <div className="popup" style={popupStyle} onClick={handlePopupClick}>
          <p>Aww, thank you! fatto</p>
          <h1 style={color}>&hearts;</h1>
        </div>
      </div>
    );
  };
  
  export default Out;