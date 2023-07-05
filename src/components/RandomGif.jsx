import React, { useEffect } from 'react';
import Header from './Header';
import Card from './Card';
import Loader from './UI/loader/Loader';
import Error from './UI/error/Error';
import Button from './UI/button/Button';

function RandomGif({ card, onRandom, isSubmited, onCardClick, errorMessage }) {
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
            <>
              <ul className='elements__list'>
                <Card card={card} size={'elements__item_big'} onCardClick={onCardClick} />
              </ul>
            </>
          )}
        </section>
        {!isSubmited && <Button btnClass={`elements__random-button`} handleClick={onRandom} >Ещё гифка</Button>}
        {card && errorMessage && <Error children={errorMessage} />}
      </main>
    </>
  );
}

export default RandomGif;
