import { cache } from 'react';
import 'server-only';
import { fetchAllProducts } from './fetch-all-products';

export const preloadProductsByCategory = (category: string) => {
  void getProductsByCategory(category);
};

export const getProductsByCategory = cache(async (category: string) => {
  try {
    const products = await fetchAllProducts();
    return products.filter((product) => product.category === category);
  } catch (error) {
    console.log(error);
    return [];
  }
});
