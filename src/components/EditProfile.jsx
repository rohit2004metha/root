import React, { useState, useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext';
import './EditProfile.css'; 

const EditProfile = ({ profile, onClose }) => {
  const { handleEditProfile } = useContext(ProfileContext);
  const [formData, setFormData] = useState({
    name: profile.name,
    title: profile.title,
    address: profile.address,
    photo: profile.photo,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    
    handleEditProfile(profile.id, formData);

    
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="glass-effect admin-form">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <label>
        Photo URL:
        <input
          type="text"
          name="photo"
          value={formData.photo}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditProfile;
