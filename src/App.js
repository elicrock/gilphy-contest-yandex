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
  const [randomGif, setRandomGif] = useState({});
  const [cards, setCards] = useState([]);
  const [isSubmited, seIsSubmited] = useState(false);

  useEffect(() => {
    if (isSubmited) {
      seIsSubmited(true);
      api
        .search(searchQuery)
        .then((res) => {
          setCards(res.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          seIsSubmited(false);
        });
    }
  }, [searchQuery, isSubmited]);

  function handleTrends() {
    seIsSubmited(true);
    api
      .trending()
      .then((res) => {
        setTrends(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        seIsSubmited(false);
      });
  }
  function handleRandom() {
    seIsSubmited(true);
    api
      .random()
      .then((res) => {
        setRandomGif(res.data.images.original.url);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        seIsSubmited(false);
      });
  }

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
              onTrends={handleTrends}
              isSubmited={isSubmited}
            />
          }
        />
        <Route
          path='/random-gif'
          element={
            <RandomGif
              card={randomGif}
              onRandom={handleRandom}
              isSumbited={isSubmited}
            />
          }
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
