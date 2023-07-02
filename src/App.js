import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import ProtectedRoute from './utils/ProtectedRoute.jsx';

import * as api from './utils/api';

import Search from './components/Search.jsx';
import Trends from './components/Trends.jsx';

function App() {
  const [cards, setCards] = useState({});


  // useEffect(() => {
  //   api.random().then((response) => {
  //     console.log(response);
  //   });
  // }, []);


  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<Search />} cards={cards} />
        <Route path='/trends' element={<Trends />} />
      </Routes>
    </div>
  );
}

export default App;
