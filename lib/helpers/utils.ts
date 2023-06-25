import { cx } from 'cva';
import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge({
  classGroups: {
    'font-size': [{ text: ['100', '200', '300', '400', '500', '600', '700'] }],
  },
});

const cn = (...args: ClassValue[]) => {
  const modified = cx(args);
  const merged = customTwMerge(modified);
  return merged;
};

export { cn };

// SHAME FUNCTION: CHEATED 😂
export const returnCategory = (b: string) => {
  let category = b.split('-').at(-1) as string;
  return category?.charAt(category?.length - 1) === 's'
    ? category
    : category + 's';
};

/*---------------------------------*
            STRING UTILS           *
  ---------------------------------*
 */

export const capitalize = (string = '') => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const trim = (string?: string) => {
  return string?.trim();
};

export const removeFirstChar = (string = '') => {
  return string?.slice(1);
};

export function pluralize(word: string, value: number) {
  return value === 1 ? `${word}` : `${word}s`;
}

export function truncate(str = '', length = str.length) {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}

type EndsWith<W, S extends string> = W extends `${infer _R}${S}` ? W : never;

export const endsWith = <Word extends string, Suffix extends string>(
  str: Word,
  suffix: Suffix
): str is EndsWith<Word, Suffix> => {
  return str.endsWith(suffix);
};

export const shortName = (name: string) => {
  const lastIndexOfSpace = name?.indexOf(' ');
  return name?.substring(0, lastIndexOfSpace);
};

/*---------------------------------*
              NUMBER UTILS           *
    ---------------------------------*
   */

export function approximate(num = 0, fractionDigits = 0) {
  return Number.parseFloat(num.toFixed(fractionDigits));
}

export function range(start: number, stop: number, step: number) {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  );
}

export function safeNum<T>(value: T) {
  const updated = Number(value);
  return Number.isNaN(updated) || isNaN(updated) ? 0 : updated;
}

interface Item {
  quantity?: number;
  price?: number;
  total?: number;
}

export function calculateTotal<T extends Item>(
  items?: T[],
  params?: 'total'
): number;
export function calculateTotal<T extends number>(quantity: T, price: T): number;
export function calculateTotal(a?: unknown, b?: unknown) {
  if (!a) return 0;

  if (typeof a === 'number' && typeof b === 'number') {
    return approximate(a * b, 2);
  }

  if (Array.isArray(a)) {
    return (a as Item[]).reduce((total, current) => {
      if (b === 'total') {
        total += safeNum(current?.total);
      } else {
        total += safeNum(current?.quantity) * safeNum(current?.price);
      }
      return approximate(total, 2);
    }, 0);
  }

  return 0;
}

export const shippingFee = (amount: number) => {
  const fee = amount * 0.01;
  return convertFee(fee);
};

export const vatFee = (amount: number) => {
  const fee = amount * 0.001;
  return convertFee(fee);
};

export const grandTotal = (total: number, shipping: number, vat: number) => {
  const fee = total + shipping + vat;
  return convertFee(fee);
};

export const formatPrice = (price = 0) => {
  return Intl.NumberFormat().format(price);
};

const convertFee = (fee: number) => {
  return parseInt(fee.toFixed(0));
};

/*---------------------------------*
              DATE UTILS           *
  ---------------------------------*
*/
type FormatDateFunction = (
  date?: string,
  formatOptions?: Intl.DateTimeFormatOptions[],
  separator?: string
) => string;

export const formatDate: FormatDateFunction = (
  date = new Date().toISOString(),
  formatOptions = [{ day: 'numeric' }, { month: 'short' }, { year: 'numeric' }],
  separator = ' '
) => {
  return formatOptions
    .map((options) => {
      const dateFormatter = new Intl.DateTimeFormat('en', options);
      return dateFormatter.format(new Date(date));
    })
    .join(separator);
};

/*---------------------------------*
            FUNCTION UTILS         *
  ---------------------------------*
*/
export const compose =
  (...fns: any[]) =>
  (res: any) =>
    fns.reduce((accum, next) => next(accum), res);

/*---------------------------------*
            OBJECT UTILS           *
  ---------------------------------*
*/

export function serialize<T>(data: T): NonNullable<T> {
  return JSON.parse(JSON.stringify(data));
}

export const objectKeys = <O extends {}>(object: O): (keyof O)[] => {
  return Object.keys(object) as (keyof O)[];
};

/*---------------------------------*
              ARRAY UTILS          *
  ---------------------------------*
*/

export function hasValues<T>(
  array: T[] | null | undefined
): array is NonNullable<T[]> {
  return (array || []).length > 0;
}

export function map<T>(
  iterable: Iterable<T>,
  cb: (...args: any) => T
): IterableIterator<T> {
  const iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return this;
    },
    next(): IteratorResult<T> {
      const next = iterator.next();
      return next.done ? next : { value: cb(next.value) };
    },
  };
}

export function filter<T>(
  iterable: Iterable<T>,
  predicate: (...args: any) => boolean
) {
  const iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return this;
    },
    next(): IteratorResult<T, boolean> {
      for (;;) {
        const next = iterator.next();
        if (next.done || predicate(next.value)) {
          return next;
        }
      }
    },
  };
}

// reverse array function using iterators
export function reverse<T>(data: ArrayLike<T>): Iterable<T> {
  return {
    [Symbol.iterator](): Iterator<T> {
      let len = data.length;
      return {
        next(): IteratorResult<T> {
          return len
            ? { value: data[--len], done: false }
            : { value: undefined, done: true };
        },
      };
    },
  };
}

export function pluck<I, K extends keyof I>(items: I[], key: K): I[K][] {
  return items.map((item) => item[key]);
}

/**
 * A Generic Ranking Algorithm
 * @param items T[]
 * @param order 'asc' | 'desc'
 * @returns An array containing the sorted items according to the ranking algorithm
 */

export const rank = <T>(
  items: T[],
  order: 'asc' | 'desc',
  callbackfn: (value: T) => number
): T[] => {
  return items
    .map((item) => ({
      item,
      rank: callbackfn(item),
    }))
    .sort((a, b) => (order === 'asc' ? a.rank - b.rank : b.rank - a.rank))
    .map((ranked) => ranked.item);
};

/*-----------------------------*
        DOM UTILS              *
-------------------------------*
*/

export const isBrowser = typeof window !== 'undefined';
export const isNavigator = typeof navigator !== 'undefined';

export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(
      ...(args as Parameters<HTMLElement['addEventListener']>)
    );
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args:
    | Parameters<T['removeEventListener']>
    | [string, Function | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(
      ...(args as Parameters<HTMLElement['removeEventListener']>)
    );
  }
}

/*---------------------------------*
            IMAGE UTILS            *
  ---------------------------------*
 */

export const shimmer = (width: number, height: number) => `
  <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="#333" />
    <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

export const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window?.btoa(str);