import React from 'react';
import Card from './Card';
import Header from './Header';

function Trends() {
  return (
    <>
      <Header />
      <main className='content'>
        <section className='elements'>
          {/* тут рендер должен быть */}
          <Card />
        </section>
      </main>
    </>
  );
}

export default Trends;
