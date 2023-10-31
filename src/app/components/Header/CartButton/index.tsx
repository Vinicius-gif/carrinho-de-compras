import { ProductsContext } from '@/app/context/ProductsContext';
import React, {useContext} from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartButton = () => {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(ProductsContext);

  return (
    <button
      type="button"
      className="text-2xl flex items-center justify-center p-1 border-none bg-none cursor-pointer relative ml-5 text-gray-800"
      onClick={ () => setIsCartVisible(!isCartVisible) }
    >
      <AiOutlineShoppingCart />
      { cartItems.length > 0 && 
        <span 
          className="bg-red-600 w-4 h-4 absolute top-0 left-0 text-white text-xs font-semibold rounded-2xl flex items-center justify-center">
          {cartItems.length}
        </span> 
      }
    </button>
  );
};

export default CartButton;
