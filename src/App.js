import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';


import Header from './components/Header.jsx';
import Search from './components/Search.jsx';
import Trends from './components/Trends.jsx';

function App() {
  return (
    <div className='page'>
      <Header />
      <Search />
      {/* <Trends /> */}
    </div>
  );
}

export default App;
