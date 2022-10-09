import axios from 'axios';
import { IProducts } from './../types/models';

async function fetchProducts() {
  const response = await axios.get<IProducts>('/api/data');
  return response.data;
}

export async function getCategories() {
  const products = await fetchProducts();
  const categories = products.map((product) => product.category);
  return Array.from(new Set(categories));
}

export async function getProductIds() {
  const products = await fetchProducts();
  return products.map((product) => `${product.id}`);
}
export async function getProductPaths() {
  const products = await fetchProducts();
  return products.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export async function getProductBySlug(slug: string) {
  const products = await fetchProducts();
  return products.find((product) => product.slug === slug);
}

export async function getProductsByCategory(category: string) {
  const products = await fetchProducts();
  return products.filter((product) => product.category === category);
}
