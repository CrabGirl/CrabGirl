import React from 'react';
import ProfileStyle from './Profile.style';
import crab from '../../../assets/images/Crabsmackingcolored.png';

function ProfilePage() {
  return (
    <ProfileStyle id="profile-page" className="standard-page">
      <div className="content-section">
        <div>I'm Carolyn and I don't like puppies</div>
        <img src={crab}/>
      </div>
    </ProfileStyle>
  );
}

export default ProfilePage;
