import React from 'react';
import crabgirl from '../../../assets/images/crabgirl.png';
import contactcrab from '../../../assets/images/contactcrab.png';
import LandingStyle from './Landing.style';

function LandingPage() {
  return (
    <LandingStyle id="landing-page">
      <div className="content-section">
        <div className="border-box title">
          <img src={crabgirl}/>
          <span>Crab Girl</span>
        </div>
      </div>
      <div className="content-section contact-section">
        <a href="mailto:carolyn.hoffert@gmail.com">
          <div className="border-box contact">
            <img className="contact-crab" src={contactcrab}/>
            <span>CONTACT</span>
          </div>
        </a>
      </div>
    </LandingStyle>
  );
}

export default LandingPage;
