import React from 'react';

function Button({ type, btnClass, btnDisabledClass, handleClick, children, disabled }) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`${btnClass} ${disabled ? btnDisabledClass : ''}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
