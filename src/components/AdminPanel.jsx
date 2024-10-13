import React, { useState, useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext';
import './AdminPanel.css';

const AdminPanel = () => {
  const { addProfile } = useContext(ProfileContext);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState('');
  const [address, setAddress] = useState('');

  const getCurrentDateTime = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date().toLocaleString('en-US', options);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !title || !photo || !address) {
      alert('Please enter all details before submitting.');
      return;
    }
    const newProfile = {
      id: Date.now(),
      name,
      title,
      photo,
      address,
      createdAt: getCurrentDateTime(),
    };
    addProfile(newProfile);
    alert('Profile added successfully!');
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setTitle('');
    setPhoto('');
    setAddress('');
  };

  return (
    <div className="admin-panel glass-effect">
      <h3>Admin Panel</h3>
      <div className="admin-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button onClick={handleSubmit}>
          Add Profile
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
