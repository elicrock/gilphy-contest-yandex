import React from 'react';
import Header from './Header';
import Card from './Card';

function RandomGift({ card }) {
  return (
    <>
      <Header></Header>
      <Card card={card} size={'elements__item_big'} />
    </>
  );
}

export default RandomGift;
