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
            <Input placeholder='Искать' handleChange={handleChange} />
            <Button type='reset' btnClass='search__clear-btn' handleClick={handleClearClick} />
            <Button type='submit' btnClass='search__sumbit-btn' handleClick={handleSearchClick} />
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
