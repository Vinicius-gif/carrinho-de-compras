/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import SearchBar from './SearchBar';
import CartButton from './CartButton';

const Header = () => {

  return (
    <header className="bg-yellow-400 h-16 w-full flex items-center fixed z-10">
      <img 
        src="/images/logo.png" 
        alt="logo" 
        className="ml-4 w-16 h-7 sm:w-32 sm:h-10"
      />
      <div className="flex items-center justify-around w-4/5">
        <SearchBar/>
        <CartButton/>
      </div>
    </header>
  );
};

export default Header;
