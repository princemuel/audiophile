import { cache } from 'react';
import 'server-only';
import { toBase64 } from './to-base-64';

export const preloadBlurDataUrls = (images: Photo[]) => {
  void blurDataUrls(images);
};

export const blurDataUrls = cache(async (images: Photo[]) => {
  const base64Promises = images.map((image) => toBase64(image.url));

  const base64Results = await Promise.all(base64Promises);

  return images.map((image, idx) => {
    image.blurredDataUrl = base64Results[idx];
    return image;
  });
});
