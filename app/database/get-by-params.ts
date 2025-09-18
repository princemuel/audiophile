import { cache } from 'react';
import 'server-only';
import { fetchAllProducts } from './fetch-all-products';

export const preloadProductByParams = ({ slug = '', category = '' }) => {
  void getProductByParams({ slug, category });
};

export const getProductByParams = cache(async ({ slug = '', category = '' }) => {
  const products = await fetchAllProducts();
  return products.filter((product) => {
    return product.category === category && product.slug === slug;
  })[0];
});

export const preloadProductsByParams = ({ category = '' }) => {
  void getProductsByParams({ category });
};

export const getProductsByParams = cache(async ({ category = '' }) => {
  const products = await fetchAllProducts();

  return (products ?? []).filter((product) => product.category === category);
});
