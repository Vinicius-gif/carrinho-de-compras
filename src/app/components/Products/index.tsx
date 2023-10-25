'use client';

import React, { useEffect, useState } from 'react';
import ProductCard, { CardProps } from './ProductCard';
import fetchProducts from '@/api/fetchProducts';

const Products = () => {

  const [ products, setProducts] = useState<CardProps[]>([]);

  useEffect(() => {
    fetchProducts({query: 'iphone'}).then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <>
      {products.map((product, index) => (
        <ProductCard key={index} title={product.title} price={product.price} thumbnail={product.thumbnail}/>
      ))}
    </>
  );
};

export default Products;
