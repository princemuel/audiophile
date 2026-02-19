import { getPlaiceholder } from "plaiceholder";
import { cache } from "react";
import "server-only";

export const preloadBase64 = (slug: string) => {
  void toBase64(slug);
};

export const toBase64 = cache(async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);

    const buffer = await response.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (_) {
    return Buffer.from(url).toString("base64");
  }
});
