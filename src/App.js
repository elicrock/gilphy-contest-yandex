import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import * as api from './utils/api';

import Search from './components/Search.jsx';
import Trends from './components/Trends.jsx';
import RandomGift from './components/RandomGift';
import PageNotFound from './components/UI/page-not-found/PageNotFound';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [trends, setTrends] = useState([]);
  const [randomGift, setRandomGift] = useState();
  const [cards, setCards] = useState([]);
  const [isSubmited, seIsSubmited] = useState(false);

  useEffect(() => {
    if (isSubmited) {
      api.search(searchQuery).then((res) => {
        setCards(res.data);
      });
      seIsSubmited(false);
    }
  }, [searchQuery, isSubmited]);

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
    seIsSubmited(true);
  }

  const handleClearInput = () => {
    setSearchQuery('');
    setCards([]);
  };

  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<Search cards={cards} isSubmited={isSubmited} handleClearInput={handleClearInput} handleChange={setSearchQuery} handleSubmit={handleSearchClick} searchQuery={searchQuery} />} />
        <Route path='/trends' element={<Trends cards={trends} />} />
        <Route path='/random-gift' element={<RandomGift card={randomGift} />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
