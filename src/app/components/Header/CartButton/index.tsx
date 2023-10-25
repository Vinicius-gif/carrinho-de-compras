import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartButton = () => {
  return (
    <button
      type="button"
      className="cart__button"
    >
      <AiOutlineShoppingCart />
      <span className="cart-status">0</span> 
    </button>
  );
};

export default CartButton;
