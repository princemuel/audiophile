import { cache } from 'react';
import 'server-only';
import { fetchAllProducts } from './products';

export const preloadProduct = (slug = '') => {
  void getProductByParams(slug);
};

export const getProductByParams = cache(async (slug = '') => {
  const products = await fetchAllProducts();
  return products?.filter((product) => product.slug === slug)[0];
});
