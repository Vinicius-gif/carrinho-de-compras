import React, {Suspense} from 'react';
import ProductCard, { CardProps } from './ProductCard';
import fetchProducts from '@/api/fetchProducts';
import Loading from './loading';

const Products = async () => {

  let products: CardProps[] = await fetchProducts({query: 'iphone'});

  return (
    <Suspense fallback={<Loading/>}>
      <section className="mt-28 mx-24 mb-12 grid grid-cols-3 gap-5">
        {products.map((product, index) => (
          <ProductCard key={index} title={product.title} price={product.price} thumbnail={product.thumbnail}/>
        ))}
      </section>
    </Suspense>
  );
};

export default Products;
