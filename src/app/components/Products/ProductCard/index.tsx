import formatCurrency from '@/utils/formatCurrency';
import React from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';

interface CardProps {
  title: string;
  price: number;
  thumbnail: string;
}

const ProductCard = ({title, price, thumbnail}: CardProps) => {
  return (
    <section className="product-card">
      
      <img
        src={thumbnail}
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
