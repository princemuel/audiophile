export const capitalize = (string: string) =>
  string?.charAt(0)?.toUpperCase() + string?.slice(1);

export const removeDot = (string: string) => string?.slice(1);

// SHAME FUNCTION: CHEATED 😂
export const returnCategory = (b: string) => {
  let category = b.split('-').at(-1) as string;
  return category?.charAt(category?.length - 1) === 's'
    ? category
    : category + 's';
};

const compose =
  (...fns: any[]) =>
  (res: any) =>
    fns.reduce((accum, next) => next(accum), res);

export function pluck<I, K extends keyof I>(items: I[], key: K): I[K][] {
  return items.map((item) => item[key]);
}
export function filter<T>(values: T[], callback: (value: T) => boolean): T[] {
  return values.filter(callback);
}
/**
 * A Generic Ranking Algorithm
 * @param items T
 * @param rank 'asc' | 'desc'
 * @returns An array containing the sorted items according to the ranking algorithm
 */

export const ranker = <T>(
  items: T[],
  rank: 'asc' | 'desc',
  callbackfn: (value: T) => number
): T[] => {
  return items
    .map((item) => ({
      item,
      rank: callbackfn(item),
    }))
    .sort((a, b) => (rank === 'asc' ? a.rank - b.rank : b.rank - a.rank))
    .map((ranked) => ranked.item);
};
