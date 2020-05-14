import React from 'react';
import author from '../../../assets/images/author_selfie.png';
import book from '../../../assets/images/book.png';
import camera from '../../../assets/images/camera.png';
import carolyn from '../../../assets/images/carolyn.jpg';
import paintbrush from '../../../assets/images/paintbrush.png';
import plant from '../../../assets/images/plant.png';
import sunglasses from '../../../assets/images/sunglasses.png';
import BackButton from '../../components/backButton';
import AuthorStyle from './Author.style';

function Art() {
  return (
    <div className="border-box art">
      <div className="box-title">Art</div>
      Carolyn favors bold lines, simple designs, and rich colors. While her drawings hold their own in black and white, she feels the vibrancy of the colors help the richness of her stories pop. She aims to provide drawings that are consistent and reproducible, not just for herself, but for her readers. She wants all kids to believe they can make their dreams come true because they’re willing to try something, not because they’re the best at it.
      <span className="img-wrapper">
        <img src={paintbrush}/>
      </span>
    </div>
  );
}

function Creds() {
  return (
    <div className="border-box cred">
      <div className="box-title">Street Cred</div>
      Carolyn holds a B.A. in English from Brigham Young University and continually strives to improve her craft through writing conferences and workshops. She is president of the Wasatch Chapter of the American Night Writers Association and a member of the Society of Children’s Book Writers and Illustrators.
      <span className="img-wrapper">
        <img src={sunglasses}/>
      </span>
    </div>
  );
}

function Photo() {
  return (
    <div className="border-box photo">
      <img className="carolyn-photo" src={carolyn}/>
      <img className="camera" src={camera}/>
    </div>
  );
}

function Quest() {
  return (
    <div className="border-box quest">
      <div className="box-title">Quest</div>
      <div>Carolyn’s story doesn’t start like many writers'. Rejected from an advanced learning course when she was younger because she failed the creativity portion of the test, she spent most of her life believing she wasn’t creative enough to be an author or illustrator. It wasn’t until she finished college and had children of her own that her imagination took over. Telling stories to her children and watching their faces light up as they shared those same stories with their friends inspired Carolyn to give writing those stories down a try. Now, she makes time every day to flex her brain and write literature that is compelling and fun.</div>
      <div>Crab Girl, in particular, started as a novel, complete at 40,000 words. She noticed that while her readers loved the story, a majority ended up either describing the fun of how Annie’s claw would work, how Jack’s features looked, or just drawing their own version and asking Carolyn to draw hers so they could compare. Thus started her journey to tame the fickle dual-headed beast that is photoshop and InDesign and give her words illustrated life. Now, she’s proud to offer another medium for her work to come alive and influence the lives of children.</div>
      <span className="img-wrapper">
        <img src={book}/>
      </span>
    </div>
  );
}

function Tiddlywinks() {
  return (
    <div className="border-box tiddlywinks">
      <div className="box-title">Tiddlywinks</div>
      Carolyn Hoffert is the mother of three young children, one particularly opinionated tween, and sixteen indoor plants. Back in middle school, she occupied the freeing grey space between rejected and accepted: tolerated. She has first-hand knowledge of the questions and concerns that crop up in young, spirited children who both want to find their own voice but also fit in.
      <span className="img-wrapper">
        <img src={plant}/>
      </span>
    </div>
  );
}

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
        <div className="left">
          <Tiddlywinks/>
          <Creds/>
        </div>
        <div className="right">
          <Photo/>
          <Art/>
        </div>
      </div>
      <div className="content-section quest-container">
        <Quest/>
      </div>
      <div className="content-section mobile">
        <Photo/>
        <Tiddlywinks/>
        <Quest/>
        <Art/>
        <Creds/>
      </div>
    </AuthorStyle>
  );
}

export default AuthorPage;
