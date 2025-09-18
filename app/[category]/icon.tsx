import { ImageResponse } from 'next/og';
import { getProductsByParams } from '../database';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = { width: 32, height: 32 };
export const contentType = 'image/jpeg';

export default async function Icon(props: PageProps<'/[category]'>) {
  const params = await props.params;
  const products = await getProductsByParams(params.category);
  const imagePath = new URL(products[0].categoryImage.mobile, process.env.NEXT_PUBLIC_SITE_URL);

  const response = await fetch(imagePath);

  const imageBuffer = Buffer.from(await response.arrayBuffer());

  return new ImageResponse(
    (
      <div tw='text-2xl bg-blue-50 w-full h-full flex items-center justify-center text-white'>
        hdhqebfbbd
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
