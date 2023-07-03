import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

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
  const [isSubmited, setIsSubmited] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  function changePage(page) {
    setIsSubmited(true);
    setCurrentPage(page);
    // handlePageClick(page);
    navigate(`?page=${page}`, { replace: true });
  }

  // function handlePageClick(pageNumber) {
  //   setIsSubmited(true);
  //   setCurrentPage(pageNumber);
  //   navigate(`?page=${pageNumber}`, { replace: true });
  // }

  const getPageCount = (totalCount, limit = 9) => {
    return Math.ceil(totalCount / limit);
  };

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
          setCards(res.data);
          setTotalPages(getPageCount(res.pagination.total_count));
        })
        .catch((error) => {
          console.log(error);
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
      })
      .catch((error) => {
        console.log(error);
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
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsSubmited(false);
      });
  }

  function handleSearchClick(evt) {
    evt.preventDefault();
    setIsSubmited(true);
    setCurrentPage(1);
    navigate(`/?page=1`);
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
              onSearch={handleSearch}
              currentPage={currentPage}
              changePage={changePage}
              totalPages={totalPages}
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
            />
          }
        />
        <Route
          path='/random-gif'
          element={<RandomGif card={randomGif} onRandom={handleRandom} isSubmited={isSubmited} />}
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
