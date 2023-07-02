import React from 'react';

import Form from './UI/form/Form';
import Input from './UI/input/Input';
import Button from './UI/button/Button';
import Card from './Card';
import Header from './Header';

function Search({ cards, handleChange, handleSubmit, searchQuery }) {
  // useEffect(() => {}, [searchQuery]);

  // function handleSearchClick(evt) {
  //   evt.preventDefault();
  //   // searchQuery;
  // }

  function handleClearClick(evt) {
    evt.preventDefault();
  }

  return (
    <>
      <Header></Header>
      <main className='content'>
        <section className='search'>
          <Form handleSubmit={handleSubmit}>
            <Input placeholder='Искать' handleChange={handleChange} />
            <Button
              type='reset'
              btnClass='search__clear-btn'
              handleClick={handleClearClick}
            />
            <Button
              type='submit'
              btnClass='search__sumbit-btn'
              handleClick={handleSubmit}
            />
          </Form>
        </section>
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

export default Search;
