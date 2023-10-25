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
    <section className="w-full max-w-xs bg-white flex flex-col cursor-pointer my-0 mx-auto relative">
      
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card__image"
      />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency({value: price, currency: 'BRL'})}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button
        type="button"
        className="button__add-cart"
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
};

export default ProductCard;
