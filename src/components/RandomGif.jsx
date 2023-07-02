import React, { useEffect } from 'react';
import Header from './Header';
import Card from './Card';
import Loader from './UI/loader/Loader';

function RandomGif({ card, onRandom, isSumbited }) {
  useEffect(() => {
    onRandom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header onRandom={onRandom} />
      {isSumbited ? (
        <Loader />
      ) : (
        <Card src={card} card={card} size={'elements__item_big'} />
      )}
    </>
  );
}

export default RandomGif;
