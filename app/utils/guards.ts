// SPDX-License-Identifier: Apache-2.0
export const isString = (value: unknown): value is string => typeof value === "string";
export const isResponse = (value: unknown): value is Response => value instanceof Response;

export const isObject = (value: unknown): value is Record<string, unknown> =>
  Object.prototype.toString.call(value) === "[object Object]";

export const isEmptyObject = (value: unknown): boolean =>
  isObject(value) && Object.keys(value).length === 0;

export const hasValues = <T>(value: T[] | undefined | null): value is NonNullable<T[]> =>
  Array.isArray(value) && value.length > 0;

export const hasValue = <T>(value: T | undefined | null): value is NonNullable<T> =>
  value !== undefined && value !== null && value !== "" && value !== false;

export const isBrowser = (() => {
  if (typeof document === "undefined" || typeof HTMLElement === "undefined") return false;
  // Deno can polyfill browser APIs, check for native implementation
  return String(HTMLElement).includes("[native code]");
})();
export const isServer = !isBrowser;
