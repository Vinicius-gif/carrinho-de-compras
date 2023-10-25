import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartButton = () => {
  return (
    <button
      type="button"
      className="text-2xl flex items-center justify-center p-1 border-none bg-none cursor-pointer relative ml-5 text-gray-800"
    >
      <AiOutlineShoppingCart />
      <span 
        className="bg-red-600 w-4 h-4 absolute top-0 left-0 text-white text-xs font-semibold rounded-2xl flex items-center justify-center">
          0
      </span> 
    </button>
  );
};

export default CartButton;
