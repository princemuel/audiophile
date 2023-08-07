'use client';

import { createContext, useContext } from 'react';

interface ProductsPromise extends Promise<IProduct[]> {}

const ProductsContext = createContext<ProductsPromise | null>(null);

export function useProducts() {
  const products = useContext(ProductsContext);
  if (products == null)
    throw new Error('useProducts must be used within a ProductsProvider');
  return products;
}

export function ProductsProvider({
  children,
  promise,
}: {
  children: React.ReactNode;
  promise: ProductsPromise;
}) {
  return (
    <ProductsContext.Provider value={promise}>
      {children}
    </ProductsContext.Provider>
  );
}
