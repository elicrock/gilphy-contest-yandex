import React, { useEffect, useState } from 'react';

import Form from './UI/form/Form';
import Input from './UI/input/Input';
import Button from './UI/button/Button';
import Card from './Card';
import Header from './Header';
import Pagination from './UI/pagination/Pagination';
import Loader from './UI/loader/Loader';
import Error from './UI/error/Error';

function Search({
  cards,
  isSubmited,
  handleClearInput,
  handleChange,
  handleSubmit,
  searchQuery,
  onSearch,
  currentPage,
  changePage,
  totalPages,
  onCardClick,
  errorMessage,
}) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    onSearch(currentPage);
    console.log(searchQuery.trim() === '');
    setIsButtonDisabled(searchQuery.trim() === '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, currentPage, isSubmited]);

  return (
    <>
      <Header></Header>
      <main className='content'>
        <section className='search'>
          <Form handleSubmit={handleSubmit}>
            <Input placeholder='Искать' handleChange={handleChange} value={searchQuery} />
            <Button type='reset' btnClass='search__button search__clear-btn' handleClick={handleClearInput} />
            <Button type='submit' btnClass='search__button search__sumbit-btn' btnDisabledClass={`search__button_disabled`} disabled={isButtonDisabled} />
          </Form>
        </section>
        <section className='elements'>
          {isSubmited ? (
            <Loader />
          ) : searchQuery ? (
            <ul className='elements__list'>
              {cards.map((card) => (
                <Card key={card.id} card={card} size={''} onCardClick={onCardClick} />
              ))}
            </ul>
          ) : (
            <p className='elements__note'>Вы ещё ничего не искали!</p>
          )}
        </section>
        {cards.length > 0 && <Pagination currentPage={currentPage} onPageChange={changePage} totalPages={totalPages} />}
        {cards.length === 0 && errorMessage && <Error children={errorMessage} />}
      </main>
    </>
  );
}

export default Search;
