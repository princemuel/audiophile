import { cache } from 'react';
import 'server-only';
import { fetchAllProducts } from './fetch-all-products';

export const preloadAllProductPaths = () => {
  void getAllProductPaths();
};

export const getAllProductPaths = cache(async () => {
  try {
    const products = await fetchAllProducts();
    return products?.map((product) => ({
      category: product.category,
      slug: product.slug,
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
});
