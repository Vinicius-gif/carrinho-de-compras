/* eslint-disable @next/next/no-img-element */
import { ProductsContext } from '@/app/context/ProductsContext';
import formatCurrency from '@/utils/formatCurrency';
import React, { useContext} from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
export interface CardProps {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

const ProductCard = ({id, title, price, thumbnail}: CardProps) => {

  const { cartItems, setCartItems } = useContext(ProductsContext);

  const addCartItem = () => {
    setCartItems([...cartItems, {
      id,
      title,
      price,
      thumbnail
    }]);
  };

  return (
    <section 
      className="group w-full max-w-xs bg-white flex flex-col cursor-pointer my-0 mx-auto relative
      hover:shadow-lg hover:flex">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="w-full"
      />

      <div className="p-5 border-t border-gray-400">
        <h2 className="text-3xl font-normal block mb-3">
          {formatCurrency({value: price, currency: 'BRL'})}
        </h2>
        <h2 className="text-sm text-gray-900 leading-6 font-medium">{title}</h2>
      </div>

      <button
        type="button"
        onClick={addCartItem}
        className="absolute top-0 right-0 w-11 h-11 my-3 mx-4 text-blue-600 bg-white items-center
        justify-center border-none rounded-l-3xl text-2xl cursor-pointer hidden group-hover:flex"
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
};

export default ProductCard;
