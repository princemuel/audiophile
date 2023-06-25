import { fetchAllProducts } from './fetch-all-products';

export async function getProductsByCategory(category: string) {
  try {
    const products = await fetchAllProducts();
    return products.filter((product) => product.category === category);
  } catch (error) {
    console.log(error);
    return [];
  }
}
