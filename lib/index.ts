import { promises as fs } from 'fs';
import path from 'path';
import { IProducts } from 'types';

const common = path.join(process.cwd(), 'common');
const filePath = path.join(common, 'data.json');

async function fetchProducts() {
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents) as IProducts;
}

export async function getCategories() {
  const products = await fetchProducts();
  const categories = products?.map((product) => product.category);
  return Array.from(new Set(categories));
}

export async function getProductIds() {
  const products = await fetchProducts();
  return products?.map((product) => `${product.id}`);
}
export async function getProductPaths() {
  const products = await fetchProducts();
  return products?.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export async function getProductBySlug(slug: string) {
  const products = await fetchProducts();
  return products?.find((product) => product.slug === slug);
}

export async function getProductsByCategory(category: string) {
  const products = await fetchProducts();
  return products?.filter((product) => product.category === category);
}
