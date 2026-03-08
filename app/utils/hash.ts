// SPDX-License-Identifier: Apache-2.0
/**
 * Hashes a value using MurmurHash3
 * @param {string} value - The value to hash
 * @param length - Desired output length (default: 12)
 * @param radix - Base for output (16=hex, 36=alphanumeric)
 * @returns Fixed-length hash string
 */
export function hash(value: string, length = 12, radix = 16) {
  return format(murmur3(value), length, radix);
}

/**
 * MurmurHash3 (32-bit) implementation
 * Fast, non-cryptographic hash with excellent distribution
 * @param {string} str - String to hash
 * @param seed - Optional seed value (default: 0)
 * @returns 32-bit unsigned integer hash
 */
function murmur3(str: string, seed = 0) {
  let h1 = seed;
  const c1 = 0xcc9e2d51;
  const c2 = 0x1b873593;

  // Process string in 4-byte chunks
  let i = 0;
  const len = str.length;

  for (; i + 4 <= len; i += 4) {
    let k1 =
      (str.charCodeAt(i) & 0xff) |
      ((str.charCodeAt(i + 1) & 0xff) << 8) |
      ((str.charCodeAt(i + 2) & 0xff) << 16) |
      ((str.charCodeAt(i + 3) & 0xff) << 24);

    k1 = (k1 * c1) >>> 0;
    k1 = ((k1 << 15) | (k1 >>> 17)) >>> 0;
    k1 = (k1 * c2) >>> 0;

    h1 ^= k1;
    h1 = ((h1 << 13) | (h1 >>> 19)) >>> 0;
    h1 = (h1 * 5 + 0xe6546b64) >>> 0;
  }

  // Handle remaining bytes
  let k1 = 0;
  const remainder = len % 4;

  if (remainder === 3) k1 ^= str.charCodeAt(i + 2) << 16;
  if (remainder >= 2) k1 ^= str.charCodeAt(i + 1) << 8;
  if (remainder >= 1) {
    k1 ^= str.charCodeAt(i);
    k1 = (k1 * c1) >>> 0;
    k1 = ((k1 << 15) | (k1 >>> 17)) >>> 0;
    k1 = (k1 * c2) >>> 0;
    h1 ^= k1;
  }

  // Finalization
  h1 ^= len;

  // fmix32
  h1 ^= h1 >>> 16;
  h1 = (h1 * 0x85ebca6b) >>> 0;
  h1 ^= h1 >>> 13;
  h1 = (h1 * 0xc2b2ae35) >>> 0;
  h1 ^= h1 >>> 16;

  return h1 >>> 0; // Ensure unsigned 32-bit
}

/**
 * Convert a 32-bit integer to a fixed-length hex or base36 string
 * @param {number} hash - The hash value
 * @param {number} length - Desired output length
 * @param radix - Base to use (16 for hex, 36 for alphanumeric)
 */
function format(hash: number, length: number, radix = 16) {
  return hash.toString(radix).padStart(length, "0").slice(0, length);
}
