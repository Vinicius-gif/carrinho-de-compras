'use client';

import React, {useContext} from 'react';
import CartItem from './CartItem';
import { ProductsContext } from '@/app/context/CarrinhoContext';

const Carrinho = () => {

  const { cartItems } = useContext(ProductsContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section className="w-full max-w-xs bg-white h-screen fixed top-0 right-0 px-5 pt-24 pb-5 flex flex-col
    justify-between transition-all duration-300 ease-linear">
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
      <div className="text-3xl font-medium pt-9 pb-4 border-t border-gray-400 ">Preço toral: {totalPrice}</div>
    </section>
  );
};

export default Carrinho;

// transform translate-x-full
