import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <h1 className='header__title'>LOGO</h1>
      <nav className='header__navigation'>
        <ul className='header__links'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Link to='/' className='header__item'>
                    Поиск
                  </Link>

                  <Link to='/trends' className='header__item'>
                    Тренды
                  </Link>
                  <Link to='/random-gift' className='header__item'>
                    Случайная гифка
                  </Link>
                </>
              }
            />
          </Routes>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
