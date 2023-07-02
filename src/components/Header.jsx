import React from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';

function Header({ onTrends }) {
  const location = useLocation();

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
                  <Link
                    to='/'
                    className={`header__item ${
                      location.pathname === '/' ? 'header__item_active' : ''
                    }`}
                  >
                    Поиск
                  </Link>
                  <Link
                    to='/trends'
                    className={`header__item ${
                      location.pathname === '/trends'
                        ? 'header__item_active'
                        : ''
                    }`}
                    onClick={onTrends}
                  >
                    Тренды
                  </Link>
                  <Link
                    to='/random-gift'
                    className={`header__item ${
                      location.pathname === '/random-gift'
                        ? 'header__item_active'
                        : ''
                    }`}
                  >
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
