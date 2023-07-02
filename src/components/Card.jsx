import React from 'react';

function Card({ card }) {
  return (
    <li className='elements__item'>
      <img src={card.images.original.url} alt={`${card.title} - гифка`} className='elements__img' />
      <h2 className='elements__title'>{card.title}</h2>
    </li>
  );
}

export default Card;
