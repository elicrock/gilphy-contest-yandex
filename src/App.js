import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import * as api from './utils/api';

import Search from './components/Search.jsx';
import Trends from './components/Trends.jsx';
import RandomGift from './components/RandomGift';
import PageNotFound from './components/UI/page-not-found/PageNotFound';

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
        <Route path='/random-gift' element={<RandomGift />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
