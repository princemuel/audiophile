import { pluck } from '@/lib';
import { cache } from 'react';
import 'server-only';
import { fetchAllProducts } from './fetch-all-products';

export const preloadAllProductCategories = () => {
  void getAllProductCategories();
};

export const getAllProductCategories = cache(async () => {
  try {
    const products = await fetchAllProducts();
    const categories = pluck(products, 'category');
    return Array.from(new Set(categories));
  } catch (error) {
    console.log(error);
    return [];
  }
});
