'use client';

import React from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  return (
    <form action="" className="flex bg-white w-full max-w-md shadow-sm justify-between gap-3 pr-3"> 
      <input
        className="p-3 grow outline-none text-xs font-medium border-r border-gray-300"
        type="search"
        value=""
        placeholder="Buscar produtos"
        required
      />

      <button type="submit" className="">
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
