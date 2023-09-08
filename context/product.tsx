'use client';

import * as React from 'react';

const ProductContext = React.createContext<Promise<IProduct> | null>(null);

interface Props {
  children: React.ReactNode;
  promise: Promise<IProduct>;
}

export const ProductProvider = ({ children, promise }: Props) => {
  return (
    <ProductContext.Provider value={promise}>
      {children}
    </ProductContext.Provider>
  );
};

export function useProduct() {
  const context = React.useContext(ProductContext);
  if (context == null)
    throw new Error(
      'The `useProduct` hook must be used in a `ProductProvider`'
    );

  return context;
}
