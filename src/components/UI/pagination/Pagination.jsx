import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const visiblePages = [];
  const startPage = Math.max(1, currentPage - 5);
  const endPage = Math.min(startPage + 9, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
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
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          НАЗАД
        </button>
        {visiblePages.map((pageNumber) => (
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
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Вперед
        </button>
      </ul>
    </>
  );
}

export default Pagination;
