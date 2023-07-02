import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import ProtectedRoute from './utils/ProtectedRoute.jsx';

import * as api from './utils/api';

import Search from './components/Search.jsx';
import Trends from './components/Trends.jsx';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([]);


  useEffect(() => {
    api.search(searchQuery).then((res) => {
      setCards(res.data);
      console.log(res.data);
    });
  }, [searchQuery]);

  function handleSearchClick(evt) {
    evt.preventDefault();
    setSearchQuery('cats')
  }


  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<Search cards={cards} handleSubmit={handleSearchClick} searchQuery={searchQuery} />} />
        <Route path='/trends' element={<Trends />} />
      </Routes>
    </div>
  );
}

export default App;
