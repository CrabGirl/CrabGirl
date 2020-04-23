import React from 'react';
import crabgirl from '../../../assets/images/crabgirl.png';
import LandingStyle from './Landing.style';

function LandingPage() {
  return (
    <LandingStyle id="landing-page">
      <div className="content-section">
        <div className="title">
          <img src={crabgirl}/>
          <span>Crab Girl</span>
        </div>
      </div>
    </LandingStyle>
  );
}

export default LandingPage;
