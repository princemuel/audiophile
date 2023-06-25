import { pluck } from '@/lib';
import { fetchAllProducts } from './fetch-all-products';

export async function getAllProductCategories() {
  try {
    const products = await fetchAllProducts();
    const categories = pluck(products, 'category');
    return Array.from(new Set(categories));
  } catch (error) {
    console.log(error);
    return [];
  }
}
