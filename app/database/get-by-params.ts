import { cache } from 'react';
import 'server-only';
import { fetchAllProducts } from './fetch-all-products';

export const preload = (slug: string, category: string) => {
  void getProductByParams(slug, category);
};
export const getProductByParams = cache(
  async (slug: string, category: string) => {
    const products = await fetchAllProducts();
    return products?.find(
      (product) => product.slug === slug && product?.category === category
    );
  }
);
