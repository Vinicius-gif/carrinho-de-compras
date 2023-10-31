'use client';

import React, { useEffect, useContext } from 'react';
import ProductCard from './ProductCard';
import fetchProducts from '@/api/fetchProducts';
import { ProductsContext } from '@/app/context/ProductsContext';

const Products = () => {

  const {products, setProducts, setLoading} = useContext(ProductsContext);
  
  useEffect(() => {
    fetchProducts({query: 'iphone'}).then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, [setProducts, setLoading]);

  return (
    <section className="pt-28 mx-28 mb-14 grid grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail}/>
      ))}
    </section>
  );
};

export default Products;
