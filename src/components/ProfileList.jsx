import React, { useContext } from 'react';
import ProfileCard from './ProfileCard';
import { ProfileContext } from '../context/ProfileContext';
import { useNavigate } from 'react-router-dom'; 
import './ProfileList.css';

const ProfileList = ({ onProfileSelect }) => {
  const { profiles } = useContext(ProfileContext);
  const navigate = useNavigate(); 
  const handleProfileClick = (profile) => {
    onProfileSelect(profile);  
    navigate(`/profiles/${profile.id}`);  
  };

  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onProfileSelect={() => handleProfileClick(profile)} 
        />
      ))}
    </div>
  );
};

export default ProfileList;
