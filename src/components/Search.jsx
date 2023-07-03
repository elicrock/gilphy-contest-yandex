import React from 'react';

import Form from './UI/form/Form';
import Input from './UI/input/Input';
import Button from './UI/button/Button';
import Card from './Card';
import Header from './Header';

import Loader from './UI/loader/Loader';

function Search({
  cards,
  isSubmited,
  handleClearInput,
  handleChange,
  handleSubmit,
  searchQuery,
}) {
  return (
    <>
      <Header></Header>
      <main className='content'>
        <section className='search'>
          <Form handleSubmit={handleSubmit}>
            <Input
              placeholder='Искать'
              handleChange={handleChange}
              value={searchQuery}
            />
            <Button
              type='reset'
              btnClass='search__clear-btn'
              handleClick={handleClearInput}
            />
            <Button type='submit' btnClass='search__sumbit-btn' />
          </Form>
        </section>
        <section className='elements'>
          {isSubmited ? (
            <Loader />
          ) : (
            <ul className='elements__list'>
              {searchQuery
                ? cards.map((card) => (
                  <Card key={card.id} card={card} size={''} />
                ))
                : 'Вы ещё ничего не искали!'}
            </ul>
          )}
        </section>
      </main>
    </>
  );
}

export default Search;
