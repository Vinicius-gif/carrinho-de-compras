'use client';

import React, { useEffect, useContext } from 'react';
import ProductCard from './ProductCard';
import fetchProducts from '@/api/fetchProducts';
import { ProductsContext } from '@/app/context/ProductsContext';
import Loading from './loading';

const Products = () => {

  const {products, setProducts, loading, setLoading} = useContext(ProductsContext);
  
  useEffect(() => {
    fetchProducts({query: 'iphone'}).then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, [setProducts, setLoading]);

  return (
    <>
      {loading ? <Loading/>
        :
        <section className="items-center justify-center pt-28 mx-28 mb-14 grid gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {products.map((product) => (
            <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail}/>
          ))}
        </section>
      }
    </>
  );
};

export default Products;
