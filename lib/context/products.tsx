//@ts-nocheck
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { request } from '../helpers';

interface Props {
  children: React.ReactNode;
}

const ProductContext = createContext();

export const ProductProvider = ({ children }: Props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = new URL('../../assets/data/data.json', import.meta.url);
    const controller = new AbortController();

    request(url, { signal: controller.signal })
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));

    return () => {
      controller.abort();
    };
  }, []);

  console.log(products);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
