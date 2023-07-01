import React, { useEffect, useState } from 'react';

import Form from './UI/form/Form';
import Input from './UI/input/Input';
import Button from './UI/button/Button';
import Card from './Card';
import Header from './Header';

function Search({ handleChange, handleSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {}, [searchQuery]);

  function handleSearchClick(evt) {
    evt.preventDefault();
    setSearchQuery('cats');
  }

  function handleClearClick(evt) {
    evt.preventDefault();
  }

  return (
    <>
      <Header></Header>
      <main className='content'>
        <section className='search'>
          <Form handleSubmit={handleSubmit}>
            <Input placeholder='Поле поиска' handleChange={handleChange} />
            <Button type='submit' handleClick={handleClearClick} />
            <Button type='button' handleClick={handleSearchClick} />
          </Form>
        </section>
        <section className='elements'>
          {/* тут рендер должен быть */}
          <Card />
        </section>
      </main>
    </>
  );
}

export default Search;
