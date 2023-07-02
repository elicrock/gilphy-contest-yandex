import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header({ onTrends, onRandom }) {
  const location = useLocation();

  return (
    <header className='header'>
      <h1 className='header__title'>LOGO</h1>
      <nav className='header__navigation'>
        <ul className='header__links'>
          <li className='header__item'>
            <Link
              to='/'
              className={`header__link ${
                location.pathname === '/' ? 'header__link_active' : ''
              }`}
            >
              Поиск
            </Link>
          </li>
          <li className='header__item'>
            <Link
              to='/trends'
              className={`header__link ${
                location.pathname === '/trends' ? 'header__link_active' : ''
              }`}
              onClick={onTrends}
            >
              Тренды
            </Link>
          </li>
          <li className='header__item'>
            <Link
              to='/random-gif'
              className={`header__link ${
                location.pathname === '/random-gif' ? 'header__link_active' : ''
              }`}
              onClick={onRandom}
            >
              Случайная гифка
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
