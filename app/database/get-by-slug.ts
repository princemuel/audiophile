import { cache } from 'react';
import 'server-only';
import { fetchAllProducts } from './fetch-all-products';

export const preload = (slug: string) => {
  void getProductBySlug(slug);
};
export const getProductBySlug = cache(async (slug: string) => {
  const products = await fetchAllProducts();
  return products?.find((product) => product.slug === slug);
});
