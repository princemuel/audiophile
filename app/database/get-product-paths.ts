import { fetchAllProducts } from './fetch-all-products';

export async function getProductPaths() {
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
}
