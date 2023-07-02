import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange, handleClickGo, handleClickDown }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className='pagination'>
        <button onClick={handleClickDown}>НАЗАД</button>
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            onClick={() => {
              onPageChange(pageNumber);
            }}
            className={`pagination__item ${pageNumber === currentPage ? 'pagination__item_active' : ''}`}
          >
            {pageNumber}
          </li>
        ))}
        <button onClick={handleClickGo}>Вперед</button>
      </ul>
    </>
  );
}

export default Pagination;
