import React, { useEffect } from 'react';
import Card from './Card';
import Header from './Header';
import Pagination from './UI/pagination/Pagination';
import Loader from './UI/loader/Loader';
import Error from './UI/error/Error';

function Trends({ cards, onTrends, isSubmited, currentPage, changePage, totalPages, onCardClick, errorMessage }) {
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
                <Card key={card.id} card={card} size={''} onCardClick={onCardClick} />
              ))}
            </ul>
          )}
        </section>
        {cards.length > 0 && <Pagination currentPage={currentPage} onPageChange={changePage} totalPages={totalPages} />}
        {cards.length === 0 && errorMessage && <Error children={errorMessage} />}
      </main>
    </>
  );
}

export default Trends;
