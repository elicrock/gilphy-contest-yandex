import React from 'react';
import Header from './Header';
import Card from './Card';

function RandomGif({ card }) {
  return (
    <>
      <Header />
      <Card card={card} size={'elements__item_big'} />
    </>
  );
}

export default RandomGif;
