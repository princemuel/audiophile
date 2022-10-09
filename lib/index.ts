import axios from 'axios';
import type { IProducts } from 'types';

async function fetchProducts(url: string) {
  const response = await axios.get<IProducts>(url + '/api/products');
  console.log(response.data);
  return response.data;
}

export function return_url(context: any) {
  switch (process.env.NODE_ENV) {
    case 'development':
      return 'http://localhost:3000';
    case 'production':
      return `https://${context.req.rawHeaders[1]}`;
    default:
      break;
  }
}
export async function getCategories(url: string) {
  const products = await fetchProducts(url);
  const categories = products.map((product) => product.category);
  return Array.from(new Set(categories));
}

export async function getProductIds(url: string) {
  const products = await fetchProducts(url);
  return products.map((product) => `${product.id}`);
}
export async function getProductPaths(url: string) {
  const products = await fetchProducts(url);
  return products.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export async function getProductBySlug(slug: string, url: string) {
  const products = await fetchProducts(url);
  return products.find((product) => product.slug === slug);
}

export async function getProductsByCategory(category: string, url: string) {
  const products = await fetchProducts(url);
  return products.filter((product) => product.category === category);
}
