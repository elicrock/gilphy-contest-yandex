import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className='page-not-found'>
      <span className='page-not-found__number'>404</span>
      <p className='page-not-found__note'>
        Страница не найдена. Пожалуйста вернитесь на
        <Link to='/' className='page-not-found__link'>
          {' '}
          главную страницу
        </Link>
      </p>
    </div>
  );
}

export default PageNotFound;
