import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import * as api from './utils/api';
import { getPageCount } from './utils/utils';
import Search from './components/Search.jsx';
import Trends from './components/Trends.jsx';
import RandomGif from './components/RandomGif';
import PageNotFound from './components/UI/page-not-found/PageNotFound';
import ImagePopup from './components/ImagePopup';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [trends, setTrends] = useState([]);
  const [randomGif, setRandomGif] = useState({});
  const [cards, setCards] = useState([]);
  const [isSubmited, setIsSubmited] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get('page')) || 1;
    setCurrentPage(page);
  }, [location.search]);

  function handleSearch() {
    if (isSubmited) {
      setIsSubmited(true);
      api
        .search(searchQuery, currentPage)
        .then((res) => {
          if (res.data.length === 0) {
            setErrorMessage(`По вашему запросу ${searchQuery} ничего не найдено`);
            setCards([]);
          } else {
            setCards(res.data);
            setTotalPages(getPageCount(res.pagination.total_count));
            setErrorMessage('');
          }
        })
        .catch((error) => {
          setErrorMessage(`Произошла ${error} при выполнение запроса`);
        })
        .finally(() => {
          setIsSubmited(false);
        });
    }
  }

  function handleTrends(currentPage) {
    setIsSubmited(true);
    api
      .trending(currentPage)
      .then((res) => {
        setTrends(res.data);
        setTotalPages(getPageCount(res.pagination.total_count));
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage(`Произошла ${error} при выполнение запроса`);
      })
      .finally(() => {
        setIsSubmited(false);
      });
  }

  function handleRandom() {
    setIsSubmited(true);
    api
      .random()
      .then((res) => {
        setRandomGif(res.data);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage(`Произошла ${error}. Гифка не найдена =(`);
      })
      .finally(() => {
        setIsSubmited(false);
      });
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closePopup() {
    setSelectedCard(null);
  }

  function changePage(page) {
    setIsSubmited(true);
    setCurrentPage(page);
    navigate(`?page=${page}`, { replace: true });
  }

  function handleSearchClick(evt) {
    evt.preventDefault();
    setIsSubmited(true);
    setCurrentPage(1);
    navigate(`/?page=1`);
  }

  function handleClearInput() {
    setSearchQuery('');
    setErrorMessage('');
    setCards([]);
  }

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
              onSearch={handleSearch}
              currentPage={currentPage}
              changePage={changePage}
              totalPages={totalPages}
              onCardClick={handleCardClick}
              errorMessage={errorMessage}
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
              currentPage={currentPage}
              changePage={changePage}
              totalPages={totalPages}
              onCardClick={handleCardClick}
              errorMessage={errorMessage}
            />
          }
        />
        <Route
          path='/random-gif'
          element={
            <RandomGif
              card={randomGif}
              onRandom={handleRandom}
              isSubmited={isSubmited}
              onCardClick={handleCardClick}
              errorMessage={errorMessage}
            />
          }
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <ImagePopup card={selectedCard} onClose={closePopup} />
    </div>
  );
}

export default App;
