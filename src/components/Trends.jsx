import React from 'react';
import Card from './Card';

function Trends() {
  return (
    <main className='content'>
      <section className='search'></section>
      <section className='elements'>
        {/* тут рендер должен быть */}
        <Card />
      </section>
    </main>
  );
}

export default Trends;
