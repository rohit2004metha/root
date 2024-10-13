import React, { createContext, useState, useEffect } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState(() => {
    const savedProfiles = localStorage.getItem('profiles');
    return savedProfiles ? JSON.parse(savedProfiles) : [];
  });

  useEffect(() => {
    localStorage.setItem('profiles', JSON.stringify(profiles));
  }, [profiles]);

  const addProfile = (profile) => {
    setProfiles((prevProfiles) => [
      ...prevProfiles,
      { ...profile, createdAt: new Date().toLocaleString() },
    ]);
  };

  const deleteProfile = (id) => {
    setProfiles((prevProfiles) => prevProfiles.filter(profile => profile.id !== id));
  };

  const handleEditProfile = (id, updatedProfile) => {
    setProfiles((prevProfiles) =>
      prevProfiles.map(profile => 
        profile.id === id ? { ...profile, ...updatedProfile } : profile
      )
    );
  };

  return (
    <ProfileContext.Provider value={{ profiles, addProfile, deleteProfile, handleEditProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
