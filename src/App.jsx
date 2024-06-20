import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Newsbar from './components/Newsbar';
import News from './components/News';
import Login from './components/Login';
import LanguageDropdown from './components/LanguageDropdown';

const users = [
  { name: 'John', password: 'password123', interests: ['technology', 'sports'] },
  { name: 'Jane', password: 'mypassword', interests: ['health', 'science'] },
];

const App = () => {
  const [category, setCategory] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('us');
  const [user, setUser] = useState(null);

  return (
    
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} users={users} />} />
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
