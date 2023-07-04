import React from 'react';
import Button from '../button/Button';

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
      <div className='pagination'>
        <Button btnClass={`pagination__button pagination__button-left`} btnDisabledClass={`pagination__button_disabled`} handleClick={handlePrevPage} disabled={currentPage === 1} />
        <ul className='pagination__list'>
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
        </ul>
        <Button btnClass={`pagination__button pagination__button-right`} btnDisabledClass={`pagination__button_disabled`} handleClick={handleNextPage} disabled={currentPage === totalPages} />
      </div>
    </>
  );
}

export default Pagination;
