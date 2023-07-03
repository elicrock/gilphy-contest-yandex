import React from 'react';

function Card({ card, size, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className={`elements__item ${size}`}>
      <img
        src={card.images?.original?.url}
        alt={`${card.title} - гифка`}
        className='elements__img'
        onClick={handleClick}
      />
    </li>
  );
}

export default Card;
