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
  const [trends, setTrends] = useState([]);
  const [randomGift, setRandomGift] = useState();

  useEffect(() => {
    api.search(searchQuery).then((res) => {
      setCards(res.data);
    });
  }, [searchQuery]);

  useEffect(() => {
    api.trending().then((res) => {
      setTrends(res.data);
    });
  }, []);

  useEffect(() => {
    api.random().then((res) => {
      setRandomGift(res.data);
    });
  }, []);

  function handleSearchClick(evt) {
    evt.preventDefault();
    setSearchQuery('cats');
  }

  return (
    <div className='page'>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <Search
              cards={cards}
              handleSubmit={handleSearchClick}
              searchQuery={searchQuery}
            />
          }
        />
        <Route path='/trends' element={<Trends cards={trends} />} />
        <Route path='/random-gift' element={<RandomGift card={randomGift} />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
