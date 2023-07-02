import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import * as api from './utils/api';

import Search from './components/Search.jsx';
import Trends from './components/Trends.jsx';
import RandomGif from './components/RandomGif';
import PageNotFound from './components/UI/page-not-found/PageNotFound';
// import Pagination from './components/UI/pagination/Pagination';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [trends, setTrends] = useState([]);
  const [randomGif, setRandomGif] = useState({});
  const [cards, setCards] = useState([]);
  const [isSubmited, setIsSubmited] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();
  const location = useLocation();

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
          setTotalPages(res.pagination.total_pages);
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
        setRandomGif(res.data.images.original.url);
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

  function handlePageClick(pageNumber) {
    setIsSubmited(true);
    setCurrentPage(pageNumber);
    navigate(`?page=${pageNumber}`, { replace: true });
  }

  const handleClearInput = () => {
    setSearchQuery('');
    setCards([]);
  };

  function renderPagination() {
    const paginationButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      paginationButtons.push(
        <button key={i} onClick={() => handlePageClick(i)} className={i === currentPage ? 'active' : ''}>
          {i}
        </button>
      );
    }
    return paginationButtons;
  }

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
              <div id='pagination'>
                <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
                  Назад
                </button>
                {renderPagination()}
                <button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
                  Вперед
                </button>
              </div>
            </>
          }
        />
        <Route
          path='/trends'
          element={
            <>
              <Trends cards={trends} onTrends={handleTrends} isSubmited={isSubmited} currentPage={currentPage} />
              <div id='pagination'>
                <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
                  Назад
                </button>
                {renderPagination()}
                <button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
                  Вперед
                </button>
              </div>
            </>
          }
        />
        <Route
          path='/random-gif'
          element={<RandomGif card={randomGif} onRandom={handleRandom} isSumbited={isSubmited} />}
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      {/* <Pagination
        currentPage={page}
        onPageChange={changePage}
        totalPages={totalPages}
        handleClickDown={handlePrevPage}
        handleClickGo={handleNextPage}
      /> */}
    </div>
  );
}

export default App;
