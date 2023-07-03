import React, { useEffect } from 'react';
import Header from './Header';
import Card from './Card';
import Loader from './UI/loader/Loader';

function RandomGif({ card, onRandom, isSubmited, onCardClick }) {
  useEffect(() => {
    onRandom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header onRandom={onRandom} />
      <main className='content'>
        <section className='elements'>
          {isSubmited ? (
            <Loader />
          ) : (
            <ul className='elements__list'>
              <Card card={card} size={'elements__item_big'} onCardClick={onCardClick} />
            </ul>
          )}
        </section>
      </main>
    </>
  );
}

export default RandomGif;
