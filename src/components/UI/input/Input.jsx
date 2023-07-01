import React from 'react';

function Input({ placeholder, handleChange }) {
  return (
    <input
      type='text'
      className='search__input'
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default Input;
