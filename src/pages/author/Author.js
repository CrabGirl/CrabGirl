import React from 'react';
import author from '../../../assets/images/author_selfie.png';
import carolyn from '../../../assets/images/carolyn.jpg';
import BackButton from '../../components/backButton';
import AuthorStyle from './Author.style';

function AuthorPage() {
  return (
    <AuthorStyle className="standard-page" id="author-page">
      <BackButton/>
      <div className="content-section">
        <div className="border-box title">
          <img src={author}/>
          <div className="text">Carolyn Hoffert</div>
        </div>
      </div>
      <div className="content-section first-section">
        <div className="border-box carolyn">
          <img src={carolyn}/>
        </div>
        <div className="border-box">
          Carolyn Hoffert is the mother of three young children, one particularly opinionated tween, and sixteen indoor plants. Back in middle school, she occupied the grey space between rejected and accepted: tolerated. She has first-hand knowledge of the questions and concerns that crop up in young, spirited children who both want to find their own voice but also fit in.
        </div>
      </div>
      <div className="content-section second-section">
        <div className="border-box">
          More recently, Carolyn strives to write literature that is compelling and fun. She first wrote Crab Girl as a novel, complete at 40,000 words. While her readers enjoyed the writing, they lamented there wasn’t a graphic novel to go with it. Thus started her journey to tame the fickle beast that is photoshop. Now, she’s proud to offer another medium for her work to come alive and influence the lives of children.
        </div>
        <div className="border-box">
          Carolyn holds a B.A. in English from <a href="https://www.byu.edu/">Brigham Young University</a> and continually strives to improve her craft through writing conferences and workshops. She is president of the Wasatch Chapter of the <a href="https://www.americannightwriters.org/">American Night Writers Association</a> and a member of the <a href="https://www.scbwi.org/">Society of Children’s Book Writers and Illustrators</a>.
        </div>
      </div>
    </AuthorStyle>
  );
}

export default AuthorPage;
