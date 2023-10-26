/* eslint-disable @next/next/no-img-element */
import formatCurrency from '@/utils/formatCurrency';
import React from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';

export interface CardProps {
  title: string;
  price: number;
  thumbnail: string;
}

const ProductCard = ({title, price, thumbnail}: CardProps) => {
  return (
    <section className="w-full max-w-xs bg-white flex flex-col cursor-pointer my-0 mx-auto relative hover:shadow-lg hover:flex">
      
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
        className="absolute top-0 right-0 w-11 h-11 my-3 mx-4 text-blue-600 bg-white items-center
        justify-center border-none rounded-l-3xl text-2xl cursor-pointer flex"
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
};

export default ProductCard;
