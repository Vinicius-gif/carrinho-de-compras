'use client';

import React, { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';
import { Product } from '../types/product';

export type ProductsContextType = {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  cartItems: Product[];
  setCartItems: Dispatch<SetStateAction<Product[]>>;
  isCartVisible: boolean;
  setIsCartVisible: Dispatch<SetStateAction<boolean>>;
};

type ProviderProps = {
  children: ReactNode;
};

// Criando um contexto
export const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

// Criando um provedor de contexto
function ProductsContextProvider({ children }: ProviderProps) {

  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);

  const value: ProductsContextType = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;


