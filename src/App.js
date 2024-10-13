import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileList from './components/ProfileList';
import { ProfileProvider, ProfileContext } from './context/ProfileContext';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const { updateProfile, deleteProfile } = useContext(ProfileContext);

  const handleEditProfile = (updatedProfile) => {
    updateProfile(updatedProfile.id, updatedProfile);
    setSelectedProfile((prevProfile) => ({
      ...prevProfile,
      ...updatedProfile,
    }));
  };

  const handleDeleteProfile = (id) => {
    deleteProfile(id);
    setSelectedProfile(null);
  };

  return (
    <ProfileProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route 
              path="/profiles" 
              element={<ProfileList onProfileSelect={setSelectedProfile} />} 
            />
            {selectedProfile && (
              <Route
                path="/profiles/:id"
                element={
                  <ProfileDetails
                    profile={selectedProfile}
                    onEdit={handleEditProfile}
                    onDelete={handleDeleteProfile}
                  />
                }
              />
            )}
          </Routes>
        </div>
      </Router>
    </ProfileProvider>
  );
}

export default App;
