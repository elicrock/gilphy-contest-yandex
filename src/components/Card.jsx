import React from 'react';

function Card({ card, size, src }) {
  return (
    <li className={`elements__item ${size}`}>
      <img src={src} alt={`${card.title} - гифка`} className='elements__img' />
      {/* <h2 className='elements__title'>{card.title}</h2> */}
    </li>
  );
}

export default Card;
