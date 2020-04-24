import React from 'react';
import author from '../../../assets/images/author.png';
import carolyn from '../../../assets/images/carolyn.jpg';
import AuthorStyle from './Author.style';

function AuthorPage() {
  return (
    <AuthorStyle className="standard-page" id="author-page">
      <div className="content-section">
        <div className="border-box title">
          <img src={author}/>
          <div className="text">Carolyn Hoffert</div>
        </div>
      </div>
      <div className="smaller-content-section">
        <div className="border-box carolyn">
          <img src={carolyn}/>
        </div>
      </div>
    </AuthorStyle>
  );
}

export default AuthorPage;
