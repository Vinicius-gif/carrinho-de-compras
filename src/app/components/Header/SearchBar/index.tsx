'use client';

import fetchProducts from '@/api/fetchProducts';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {

  const [ searchValue, setsearchValue ] = useState('');

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const products = await fetchProducts({query: searchValue});
    console.log(products);
    setsearchValue('');
  };

  return (
    <form 
      action="" 
      className="flex bg-white w-full max-w-md shadow-sm justify-between gap-3 pr-3"
      onSubmit={handleSearch}
    > 
      <input
        className="p-3 grow outline-none text-xs font-medium border-r border-gray-300"
        type="search"
        placeholder="Buscar produtos"
        value={searchValue}
        onChange={(e) => setsearchValue(e.target.value)}
        required
      />
      <button 
        type="submit" 
        className="bg-none border-none text-base flex items-center justify-center text-gray-800s">
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
