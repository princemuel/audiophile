import { removeFirstChar } from '@/helpers';
import { cache } from 'react';
import 'server-only';

export const preloadAllProducts = () => {
  void fetchAllProducts();
};

export const fetchAllProducts = cache(async () => {
  try {
    const response = (await import('../../assets/data/data.json')).default;

    const data = JSON.parse(JSON.stringify(response), (key, value) => {
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
