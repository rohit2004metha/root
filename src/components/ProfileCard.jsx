import React, { useState, useContext } from 'react';
import MapComponent from './MapComponent';
import './ProfileCard.css';
import { ProfileContext } from '../context/ProfileContext';
import EditProfile from './EditProfile';

const ProfileCard = ({ profile }) => {
  const [flipped, setFlipped] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { deleteProfile } = useContext(ProfileContext);

  const handleDelete = (event) => {
    event.stopPropagation();
    if (window.confirm('Are you sure you want to delete this profile?')) {
      deleteProfile(profile.id);
      alert('Profile deleted successfully!');
    }
  };

  const handleToggleMap = (event) => {
    event.stopPropagation();
    setShowMap((prev) => !prev);
  };

  const handleEdit = (event) => {
    event.stopPropagation();
    setIsEditing(!isEditing);
  };

  const handleViewProfile = (event) => {
    event.stopPropagation();
    setFlipped(true);
  };

  const handleBackToFront = (event) => {
    event.stopPropagation();
    setFlipped(false);
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''} ${isEditing ? 'expanded' : ''}`}>
      <div className="card-inner">
        <div className="card-side front">
          <img src={profile.photo} alt={profile.name} className="profile-photo" />
          <h4 className="profile-name">{profile.name}</h4>
          <p className="card-title">{profile.title}</p>
          <p className="profile-created-at">{profile.createdAt}</p>
          <button className="card-button" onClick={handleViewProfile}>
            View Profile
          </button>
          <button className="edit-button" onClick={handleEdit}>Edit Profile</button>
          <button className="delete-button" onClick={handleDelete}>Delete Profile</button>
          {isEditing && (
            <div className="edit-profile-form">
              <EditProfile profile={profile} onClose={() => setIsEditing(false)} />
            </div>
          )}
        </div>

        <div className="card-side back">
          <h4 className="profile-name">{profile.name}</h4>
          <p className="profile-title">{profile.title}</p>
          <p className="profile-address">{profile.address}</p>
          <button className="show-address-button" onClick={handleToggleMap}>
            {showMap ? 'Hide Address' : 'Show Address'}
          </button>
          {showMap && <MapComponent address={profile.address} />}
          <button className="show-address-button" onClick={handleBackToFront}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
