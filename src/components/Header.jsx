import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header({ onTrends, onRandom }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className='header'>
      <div className='header__logo-container'>
        <Link to="/gilphy-contest-yandex" className="header__logo-link" >
          <img src={logo} alt="GIF Logo" className="header__logo-image" />
        </Link>
        <button className='header__burger' onClick={handleMenuClick}>
          <span className={`header__burger-line ${isMenuOpen ? 'header__burger-line_close' : ''}`}></span>
        </button>
      </div>
      <nav className='header__navigation'>
        <ul className={`header__links ${isMenuOpen ? 'header__links_mobile-open' : ''}`}>
          <li className='header__item'>
            <Link to='/' className={`header__link ${location.pathname === '/' ? 'header__link_active' : ''}`}>
              Поиск
            </Link>
          </li>
          <li className='header__item'>
            <Link
              to='/trends'
              className={`header__link ${location.pathname === '/trends' ? 'header__link_active' : ''}`}
              onClick={onTrends}
            >
              Тренды
            </Link>
          </li>
          <li className='header__item'>
            <Link
              to='/random-gif'
              className={`header__link ${location.pathname === '/random-gif' ? 'header__link_active' : ''}`}
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
