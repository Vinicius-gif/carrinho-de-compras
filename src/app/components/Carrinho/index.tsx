'use client';

import React, {useContext} from 'react';
import CartItem from './CartItem';
import { ProductsContext } from '@/app/context/ProductsContext';
import formatCurrency from '@/utils/formatCurrency';
import {MdRemoveShoppingCart} from 'react-icons/md';


const Carrinho = () => {

  const { cartItems, setCartItems, isCartVisible } = useContext(ProductsContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);
  const priceCurrency = formatCurrency({value: totalPrice, currency: 'BRL'});

  const limparCarrinho = () => {
    setCartItems([]);
  };

  return (
    <section className={`w-full max-w-xs bg-white h-screen fixed top-0 right-0 px-5 pt-24 pb-5 flex flex-col
    justify-between transition-all duration-200 ease-linear transform translate-x-full 
    ${isCartVisible ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="grow overflow-auto border-b-0 last:border-b-0">
        { cartItems.map((cartItem) => 
          <CartItem
            id={cartItem.id} 
            key={cartItem.id}  
            title={cartItem.title} 
            price={cartItem.price}
            thumbnail={cartItem.thumbnail}
          />
        )}
      </div>
      <div className="text-3xl font-medium pt-9 pb-4 border-t border-gray-400 ">Total: {priceCurrency}</div>
      <div>
        <button type="button" className="flex items-center font-medium" onClick={limparCarrinho}>
          Limpar carrinho: <MdRemoveShoppingCart className="w-8 h-8 text-red-700"/>
        </button>
      </div>
    </section>
  );
};

export default Carrinho;

// transform translate-x-full
