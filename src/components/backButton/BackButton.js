import React from 'react';
import BackButtonStyle from './BackButton.style';

function BackButton() {
  return (
    <BackButtonStyle className="content-section back-section">
      <a href="/">
        <div className="border-box back-box">
          <div className="back">Back</div>
          <span className="line1"/>
          <span className="line2"/>
        </div>
      </a>
    </BackButtonStyle>
  );
}

export default BackButton;
