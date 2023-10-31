/* eslint-disable @next/next/no-img-element */
import { ProductsContext } from '@/app/context/ProductsContext';
import { Product } from '@/app/types/product';
import formatCurrency from '@/utils/formatCurrency';
import React, {useContext} from 'react';
import { BsCartDashFill } from 'react-icons/bs';

const CartItem = ({ id, title, price, thumbnail}: Product) => {

  const { cartItems, setCartItems } = useContext(ProductsContext);

  const handleRemoveItem = () => {
    const updatedCartItens = cartItems.filter((item) => item.id != id);
    setCartItems(updatedCartItens);
  }; 

  return (
    <section className="flex items-start border-b border-gray-400 pb-5 mb-5 relative">
      <img src={thumbnail} alt="thumbnail" className="w-16"/>
      <div className="pt-0 pr-9 pb-0 pl-3">
        <h3 className="text-sm font-medium text-black mb-2">{title}</h3>
        <h3 className="text-2xl font-medium">{formatCurrency({value: price, currency: 'BRL'})}</h3>

        <button
          type="button"
          className="absolute top-0 right-0 text-red-500 text-2xl border-none bg-none cursor-pointer"
          onClick={ handleRemoveItem }
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
