import React from 'react';

function Input({ placeholder, handleChange, value }) {
  return (
    <input
      type='text'
      className='search__input'
      placeholder={placeholder}
      onChange={e => handleChange(e.target.value)}
      value={value}
    />
  );
}

export default Input;
