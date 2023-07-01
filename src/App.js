import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import * as api from './utils/Api';

import Header from './components/Header.jsx';
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
      <Header />
      <Search />
      {/* <Trends /> */}
    </div>
  );
}

export default App;
