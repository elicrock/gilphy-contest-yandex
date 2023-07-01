import React from 'react';

function Button({ type, handleClick }) {
  return (
    <button
      type={type}
      className='search__button'
      onClick={handleClick}
    ></button>
  );
}

export default Button;
