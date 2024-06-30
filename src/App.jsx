import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Newsbar from './components/Newsbar';
import News from './components/News';
import Login from './components/Login';
import Signup from './components/Signup';
import LanguageDropdown from './components/LanguageDropdown';

const App = () => {
  const [category, setCategory] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('us');
  const [user, setUser] = useState(null);
  const [allUsers, setAllUsers] = useState(() => {
    // Retrieve users from localStorage if available
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const addUser = (newUser) => {
    const updatedUsers = [...allUsers, newUser];
    setAllUsers(updatedUsers);
    // Save the updated users list to localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
  
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} users={allUsers} />} />
        <Route path="/signup" element={<Signup addUser={addUser} />} />
        <Route
          path="/"
          element={
            <>
              <Newsbar setCategory={setCategory} interests={user?.interests} />
              <LanguageDropdown selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
              <News category={category} selectedLanguage={selectedLanguage} />
            </>
          }
        />
      </Routes>

  );
};

export default App;
