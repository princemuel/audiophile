import { cache } from 'react';
import 'server-only';
import database from './database.json';

export const preloadAllProducts = () => {
  void fetchAllProducts();
};

// const excluded = ["wiki", "posts", "resources", "articles", "dashboard"];
const keys = new Set(['image', 'categoryImage', 'first', 'second', 'third']);

export const fetchAllProducts = cache(async () => {
  try {
    const data = JSON.parse(JSON.stringify(database), (key, value) => {
      if (keys.has(key)) {
        value.mobile = value?.mobile?.slice(1);
        value.tablet = value?.tablet?.slice(1);
        value.desktop = value?.desktop?.slice(1);
      }
      return value;
    }) as IProduct[];

    return data.sort((a, b) => Number(b.new) - Number(a.new));
  } catch (error) {
    console.log(error);
    return [];
  }
});
