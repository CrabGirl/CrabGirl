import React from 'react';
import author from '../../../assets/images/author.png';
import crabgirl from '../../../assets/images/crabgirl.png';
import contactcrab from '../../../assets/images/contactcrab.png';
import jack from '../../../assets/images/jack.png';
import love from '../../../assets/images/love.png';
import pdf from '../../../assets/CrabGirlGraphicNovel.pdf';
import LandingStyle from './Landing.style';

function LandingPage() {
  return (
    <LandingStyle id="landing-page">
      <div className="content-section">
        <div className="border-box title">
          <img src={crabgirl}/>
          <div className="text">Crab Girl</div>
        </div>
      </div>
      <div className="smaller-content-section second-section">
        <div className="border-box author">
          <div className="text">
            <div>About</div>
            <div className="the">the</div>
            <div>Author</div>
          </div>
          <img src={author}/>
        </div>
        <a href={pdf} target="_blank">
          <div className="border-box chapter">
            <div className="text">
              <div><span className="first">1</span><sup>st</sup></div>
              <div>Chapter</div>
            </div>
            <img src={jack}/>
          </div>
        </a>
      </div>
      <div className="smaller-content-section character-section">
        <div className="border-box character">
          <img src={love}/>
          <div className="text">
            <div>Synopsis &</div>
            <div className="second-line">Characters</div>
          </div>
        </div>
      </div>
      <div className="smaller-content-section contact-section">
        <a href="mailto:carolyn.hoffert@gmail.com">
          <div className="border-box contact">
            <img className="contact-crab" src={contactcrab}/>
            <div className="text">Contact</div>
          </div>
        </a>
      </div>
    </LandingStyle>
  );
}

export default LandingPage;
