import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

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

  // const [totalPages, setTotalPages] = useState(0);
  // const [page, setPage] = useState(1);

  // const getPageCount = (totalCount, limit) => {
  //   return Math.floor(totalCount / limit);
  // };

  // const handlePrevPage = () => {
  //   if (page > 1) {
  //     changePage(page - 1);
  //   }
  // };

  // const handleNextPage = () => {
  //   if (page < totalPages) {
  //     changePage(page + 1);
  //   }
  // };

  // useEffect(() => {
  //   api.search(searchQuery).then((res) => {
  //     setTotalPages(getPageCount(res.pagination.total_count, 1000));
  //   });
  // }, [page]);

  // function changePage(page) {
  //   setPage(page);
  // }

  useEffect(() => {
    if (isSubmited) {
      setIsSubmited(true);
      api
        .search(searchQuery)
        .then((res) => {
          setCards(res.data);
          // setTotalPages(getPageCount(res.pagination.total_count, 1000));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsSubmited(false);
        });
    }
  }, [searchQuery, isSubmited]);

  function handleTrends() {
    setIsSubmited(true);
    api
      .trending()
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
        <Route path='/trends' element={<Trends cards={trends} onTrends={handleTrends} isSubmited={isSubmited} />} />
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
