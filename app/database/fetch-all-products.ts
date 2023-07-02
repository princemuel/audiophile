import { removeFirstChar } from '@/lib';
import { promises as fs } from 'fs';
import path from 'path';
import { cache } from 'react';
import 'server-only';

const assets = path.join(process.cwd(), 'assets');
const filePath = path.join(assets, 'data/data.json');

export const preloadAllProducts = () => {
  void fetchAllProducts();
};

export const fetchAllProducts = cache(async () => {
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents, (key, value) => {
      if (
        key === 'image' ||
        key === 'categoryImage' ||
        key === 'first' ||
        key === 'second' ||
        key === 'third'
      ) {
        value.mobile = removeFirstChar(value?.mobile);
        value.tablet = removeFirstChar(value?.tablet);
        value.desktop = removeFirstChar(value?.desktop);
      }
      return value;
    }) as IProduct[];

    return data.sort((a, b) => Number(b.new) - Number(a.new));
  } catch (error) {
    console.log(error);
    return [];
  }
});
