import React from 'react';

function Error({ children }) {
  return (
    <div className='error'>
      <p className='error__message'>{children}</p>
    </div>
  );
}

export default Error;
