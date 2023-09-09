'use client';

import * as React from 'react';

const ProductsContext = React.createContext<Promise<IProduct[]> | null>(null);

interface Props {
  children: React.ReactNode;
  promise: Promise<IProduct[]>;
}

export const ProductsProvider = ({ children, promise }: Props) => {
  return (
    <ProductsContext.Provider value={promise}>
      {children}
    </ProductsContext.Provider>
  );
};

export function useProducts() {
  const context = React.useContext(ProductsContext);
  if (context == null)
    throw new Error(
      'The `useProducts` hook must be used in a `ProductsProvider`'
    );

  return context;
}
