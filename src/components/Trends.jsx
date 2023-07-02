import React from 'react';
import Card from './Card';
import Header from './Header';

function Trends({ cards }) {
  return (
    <>
      <Header />
      <main className='content'>
        <section className='elements'>
          <ul className='elements__list'>
            {cards.map((card) => (
              <Card key={card.id} card={card} size={''} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Trends;
