import { fetchAllProducts } from './fetch-all-products';

export async function getProductBySlug(slug: string) {
  const products = await fetchAllProducts();
  return products?.find((product) => product.slug === slug);
}
