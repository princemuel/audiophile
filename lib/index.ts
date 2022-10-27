import { promises as fs } from 'fs';
import path from 'path';
import { IProducts } from 'types';
import { pluck, removeDot } from 'utils';

const common = path.join(process.cwd(), 'common');
const filePath = path.join(common, 'data.json');

async function fetchProducts() {
  const fileContents = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(fileContents, (key, value) => {
    if (
      key === 'image' ||
      key === 'categoryImage' ||
      key === 'first' ||
      key === 'second' ||
      key === 'third'
    ) {
      value.mobile = removeDot(value?.mobile);
      value.tablet = removeDot(value?.tablet);
      value.desktop = removeDot(value?.desktop);
    }
    return value;
  }) as IProducts;

  return data.sort((a, b) => Number(b.new) - Number(a.new));
}

export async function getCategories() {
  const products = await fetchProducts();
  const categories = pluck(products, 'category');
  return Array.from(new Set(categories));
}

export async function getIds() {
  const products = await fetchProducts();
  return products?.map((product) => product?.id?.toString());
}

export async function getProductPaths() {
  const products = await fetchProducts();
  return products?.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export async function getBySlug(slug: string) {
  const products = await fetchProducts();
  return products?.find((product) => product.slug === slug);
}

export async function getByCategory(category: string) {
  const products = await fetchProducts();
  return products?.filter((product) => product.category === category);
}
