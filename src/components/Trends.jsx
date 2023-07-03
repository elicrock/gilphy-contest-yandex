import React, { useEffect } from 'react';
import Card from './Card';
import Header from './Header';
import Pagination from './UI/pagination/Pagination';
import Loader from './UI/loader/Loader';

function Trends({ cards, onTrends, isSubmited, currentPage, changePage, totalPages }) {
  useEffect(() => {
    onTrends(currentPage);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <>
      <Header onTrends={onTrends} />
      <main className='content'>
        <section className='elements'>
          {isSubmited ? (
            <Loader />
          ) : (
            <ul className='elements__list'>
              {cards.map((card) => (
                <Card key={card.id} card={card} size={''} />
              ))}
            </ul>
          )}
        </section>
        <Pagination
          currentPage={currentPage}
          onPageChange={changePage}
          totalPages={totalPages}
        />
      </main>
    </>
  );
}

export default Trends;
