import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProfileProvider } from './context/ProfileContext'; 

ReactDOM.render(
  <ProfileProvider>
    <App />
  </ProfileProvider>,
  document.getElementById('root')
);
