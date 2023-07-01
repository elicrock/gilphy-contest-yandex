import React from 'react';

function Form({ children, handleSubmit }) {
  return (
    <form className='search__form' onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

export default Form;
