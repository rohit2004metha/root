
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Profile Management System</h1>
      <p>Use the navigation above to manage profiles and access the admin panel.</p>

      <h2>Project Overview</h2>
      <p>
        This Profile Management System is designed to provide users with a seamless experience for viewing, managing, and editing profile information. 
        The application allows users to create, read, update, and delete profiles, facilitating efficient profile management.
      </p>

      
      <h2>Key Features</h2>
      <ul>
        <li>1.User authentication to securely manage profiles.</li>
        <li>2.Dynamic profile cards that flip to show additional information.</li>
        <li>3.Admin panel for managing profiles with options to edit or delete.</li>
        <li>4.Interactive map integration to display user addresses.</li>
        <li>5.Responsive design for compatibility across devices.</li>
      </ul>
    </div>
  );
};

export default HomePage;
