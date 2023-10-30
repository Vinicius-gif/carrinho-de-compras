'use client';

import React from 'react';
import SearchBar from './SearchBar';
import CartButton from './CartButton';
import Image from 'next/image';

const Header = () => {

  return (
    <header className="bg-yellow-400 w-full h-16 flex items-center fixed z-10">
      <Image width={128} height={40} src="/images/logo.png" alt="logo" className="ml-4"/>
      <div className="flex items-center justify-around w-4/5">
        <SearchBar/>
        <CartButton/>
      </div>
    </header>
  );
};

export default Header;
