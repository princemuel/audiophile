import { cache } from 'react';
import 'server-only';

export const preloadAllProducts = () => {
  void fetchAllProducts();
};

import { RuleBuilder, walk } from '@/helpers/normalize';
import database from './database.json' with { type: 'json' };

const stripDotRule = new RuleBuilder()
  .whenKey(/(mobile|tablet|desktop)/)
  .whenType('string')
  .stopHere()
  .transform((v) => ((v as string).startsWith('./') ? (v as string).slice(1) : v));

const clone = structuredClone(database);
const data = (walk(clone, [stripDotRule]) ?? []) as IProduct[];
const products = data.toSorted((a, b) => Number(b.new) - Number(a.new));

export const fetchAllProducts = cache(async () => products);
