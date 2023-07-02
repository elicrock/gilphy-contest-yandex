import React from 'react';

function Button({ type, btnClass, handleClick }) {
  return (
    <button
      type={type}
      className={`search__button ${btnClass}`}
      onClick={handleClick}
    ></button>
  );
}

export default Button;
