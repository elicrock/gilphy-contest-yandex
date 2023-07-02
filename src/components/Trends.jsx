import React, { useEffect } from 'react';
import Card from './Card';
import Header from './Header';
import Loader from './UI/loader/Loader';

function Trends({ cards, onTrends, isSubmited }) {
  useEffect(() => {
    onTrends();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                <Card
                  src={card.images.original.url}
                  key={card.id}
                  card={card}
                  size={''}
                />
              ))}
            </ul>
          )}
        </section>
      </main>
    </>
  );
}

export default Trends;
