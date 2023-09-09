import { getPlaiceholder } from 'plaiceholder';
import { cache } from 'react';
import 'server-only';

export const preloadBase64 = (slug: string) => {
  void toBase64(slug);
};

export const toBase64 = cache(async (imageUrl: string) => {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch image: ${response.status} ${response.statusText}`
      );
    }
    const buffer = await response.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (exception) {
    if (exception instanceof Error) console.log(exception.stack);
    else console.log(exception);
    return typeof window === 'undefined'
      ? Buffer.from(imageUrl).toString('base64')
      : window?.btoa(imageUrl);
  }
});
