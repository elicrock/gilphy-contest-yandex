import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import ProtectedRoute from './utils/ProtectedRoute.jsx';

import * as api from './utils/api';

import Search from './components/Search.jsx';
import Trends from './components/Trends.jsx';

function App() {
  // useEffect(() => {
  //   api.random().then((response) => {
  //     console.log(response);
  //   });
  // }, []);
  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/trends' element={<Trends />} />
      </Routes>
    </div>
  );
}

export default App;
