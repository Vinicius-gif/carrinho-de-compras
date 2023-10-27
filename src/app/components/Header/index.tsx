'use client';

import React, { useContext } from 'react';
import SearchBar from './SearchBar';
import CartButton from './CartButton';
import Image from 'next/image';
import { ProductsContext } from '@/app/context/CarrinhoContext';

const Header = () => {

  const context = useContext(ProductsContext);

  if (context === undefined) {
    return null; 
  }

  const { products } = context;
  console.log(products);
  

  return (
    <header className="bg-yellow-400 w-full h-16 flex items-center">
      <Image width={128} height={40} src="/images/logo.png" alt="logo" className="ml-4"/>
      <div className="flex items-center justify-around w-4/5">
        <SearchBar/>
        <CartButton/>
      </div>
    </header>
  );
};

export default Header;
