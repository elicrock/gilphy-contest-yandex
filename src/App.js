import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute.jsx';

import * as api from './utils/api';

import Search from './components/Search.jsx';
import Trends from './components/Trends.jsx';
import RandomGift from './components/RandomGift';
import PageNotFound from './components/UI/page-not-found/PageNotFound';

function App() {
  // useEffect(() => {
  //   api.random().then((response) => {
  //     console.log(response);
  //   });
  // }, []);

  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<ProtectedRoute element={Search} />} />
        <Route path='/trends' element={<Trends />} />
        <Route path='/random-gift' element={<RandomGift />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
