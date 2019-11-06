import React from 'react';
import Profile from './Components/UserData';
import Followers from './Components/Followers';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='app-app'>
        <h1>Git Hub User Card</h1>
        <Profile />
        <h1>Followers</h1>
        <Followers />
      </div>
    </div>
  );
}

export default App;