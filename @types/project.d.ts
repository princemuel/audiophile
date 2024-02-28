import type { VariantProps } from 'cva';

export type RequiredVariantProps<
  T extends (...args: any) => any,
  // By default, all variants will be required
  Keys extends keyof VariantProps<T> = keyof VariantProps<T>,
> = Simplify<
  // Create an intersection of all variants with those being marked as required
  VariantProps<T> & {
    // For each variant being marked as required, remove null and undefined
    [Variant in Keys]: Exclude<VariantProps<T>[Variant], null | undefined>;
  }
>;

type Simplify<T> = { [K in keyof T]: T[K] } & NonNullable<unknown>;
