import React, { useEffect } from 'react';
import Card from './Card';
import Header from './Header';

function Trends({ cards, setTrends, onTrends }) {
  useEffect(() => {
    onTrends();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header setTrends={setTrends} />
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
