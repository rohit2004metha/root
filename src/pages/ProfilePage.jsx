import React, { useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext'; 

const ProfilePage = ({ selectedProfile }) => {
  const { profiles } = useContext(ProfileContext);

  if (!selectedProfile) {
    return <div>Please select a profile to view details.</div>; 
  }

  return (
    <div className="profile-page">
      <h1>User Profile Details</h1>
      <ProfileDetails
        profile={selectedProfile} 
        onEdit={() => console.log('Edit button clicked')}
        onDelete={() => console.log('Delete button clicked')}
        
      />
    </div>
  );
};

export default ProfilePage;
