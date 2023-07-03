import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  function handlePrevPage() {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }

  function handleNextPage() {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }


  return (
    <>
      <ul className='pagination'>
        <button onClick={handlePrevPage}>НАЗАД</button>
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
        <button onClick={handleNextPage}>Вперед</button>
      </ul>
    </>
  );
}

export default Pagination;
