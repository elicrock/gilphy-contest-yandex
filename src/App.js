import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import * as api from './utils/api';

import Search from './components/Search.jsx';
import Trends from './components/Trends.jsx';
import RandomGif from './components/RandomGif';
import PageNotFound from './components/UI/page-not-found/PageNotFound';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [trends, setTrends] = useState([]);
  const [randomGif, setRandomGif] = useState(null);
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

  function handleTrends() {
    api.trending().then((res) => {
      setTrends(res.data);
    });
  }

  useEffect(() => {
    api.random().then((res) => {
      setRandomGif(res.data);
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
        <Route
          path='/'
          element={
            <Search
              cards={cards}
              isSubmited={isSubmited}
              handleClearInput={handleClearInput}
              handleChange={setSearchQuery}
              handleSubmit={handleSearchClick}
              searchQuery={searchQuery}
            />
          }
        />
        <Route
          path='/trends'
          element={
            <Trends
              cards={trends}
              setTrends={setTrends}
              onTrends={handleTrends}
            />
          }
        />
        <Route path='/random-gif' element={<RandomGif card={randomGif} />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
