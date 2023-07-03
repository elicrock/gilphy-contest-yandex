import React from 'react';

function Button({ type, btnClass, handleClick, children, disabled }) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`search__button ${btnClass} ${disabled ? 'pagination__button_disabled' : ''}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
