import { cache } from 'react';
import 'server-only';

/**
 * This function is named like so to avoid a clash
 * with  React's own function of the same name
 *
 */
export function createServerCtx<T>(defaultValue: T) {
  const cachedRef = cache(() => ({ current: defaultValue }));

  const getValue = () => cachedRef().current;

  const setValue = (value: T) => {
    cachedRef().current = value;
  };

  return [getValue, setValue] as const;
}

// export const [getCountries, setCountries] = createServerCtx<CountryType[]>([]);
