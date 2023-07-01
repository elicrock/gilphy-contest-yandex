import React from 'react';

function Header() {
  return (
    <header className='header'>
      <h1 className='header__title'>LOGO</h1>
      <nav className='header__navigation'>
        <ul className='header__links'>
          <li className='header__item'>Поиск</li>
          <li className='header__item'>Тренды</li>
          <li className='header__item'>Случайный гиф</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
