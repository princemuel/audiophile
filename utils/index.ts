export const capitalize = (string: string) =>
  string?.charAt(0)?.toUpperCase() + string?.slice(1);

export const removeDot = (string: string) => string?.slice(1);

const pluckDeep = (key: string) => (obj: any) =>
  key
    .split('.')
    .reduce(
      (accum: { [x: string]: any }, key: string | number) => accum[key],
      obj
    );

const compose =
  (...fns: any[]) =>
  (res: any) =>
    fns.reduce((accum, next) => next(accum), res);

const unfold = (f: any, seed: any) => {
  const go = (f: (arg0: any) => any, seed: any, acc: any[]) => {
    const res = f(seed);
    return res ? go(f, res[1], acc.concat([res[0]])) : acc;
  };
  return go(f, seed, []);
};
