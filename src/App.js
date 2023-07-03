import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import * as api from './utils/api';

import Search from './components/Search.jsx';
import Trends from './components/Trends.jsx';
import RandomGif from './components/RandomGif';
import PageNotFound from './components/UI/page-not-found/PageNotFound';
import Pagination from './components/UI/pagination/Pagination';

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

  function handlePrevPage() {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  }

  function handleNextPage() {
    if (currentPage < totalPages) {
      changePage(currentPage + 1);
    }
  }

  function changePage(page) {
    setCurrentPage(page);
    handlePageClick(page);
  }

  function handlePageClick(pageNumber) {
    setIsSubmited(true);
    setCurrentPage(pageNumber);
    navigate(`?page=${pageNumber}`, { replace: true });
  }

  const getPageCount = (totalCount, limit = 9) => {
    const totalPages = Math.ceil(totalCount / limit);
    return Math.min(totalPages, 10);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get('page')) || 1;
    setCurrentPage(page);
  }, [location.search]);

  useEffect(() => {
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
  }, [searchQuery, currentPage, isSubmited]);

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
            <>
              <Search
                cards={cards}
                isSubmited={isSubmited}
                handleClearInput={handleClearInput}
                handleChange={setSearchQuery}
                handleSubmit={handleSearchClick}
                searchQuery={searchQuery}
              />
              <Pagination
                currentPage={currentPage}
                onPageChange={changePage}
                totalPages={totalPages}
                handleClickDown={handlePrevPage}
                handleClickGo={handleNextPage}
              />
            </>
          }
        />
        <Route
          path='/trends'
          element={
            <>
              <Trends cards={trends} onTrends={handleTrends} isSubmited={isSubmited} currentPage={currentPage} />
              <Pagination
                currentPage={currentPage}
                onPageChange={changePage}
                totalPages={totalPages}
                handleClickDown={handlePrevPage}
                handleClickGo={handleNextPage}
              />
            </>
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
