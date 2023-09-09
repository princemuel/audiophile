import {
  fetchAllProducts,
  getProductByParams,
  preloadProductByParams,
} from '@/app/database';
import { capitalize } from '@/helpers';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductDetailsTemplate } from './product';

interface Props {
  params: IParams;
}

const PageRoute = async ({ params: { slug, category } }: Props) => {
  preloadProductByParams({ slug, category });

  const product = await getProductByParams({ slug, category });
  if (!product) notFound();

  return (
    <main
      aria-label={`Details about the ${product?.name}`}
      className='my-28 flex flex-col gap-28'
    >
      <ProductDetailsTemplate product={product} />
    </main>
  );
};

export default PageRoute;

export async function generateStaticParams() {
  const products = await fetchAllProducts();

  return (products || []).map(({ slug, category }) => {
    return { slug, category };
  });
}

export async function generateMetadata({
  params: { slug, category },
}: Props): Promise<Metadata> {
  const product = await getProductByParams({ slug, category });

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested resource does not exist',
    };
  }

  return {
    title: product.name,
    description: product.description,
    keywords: [
      'E-Commerce',
      'Audio Devices',
      capitalize(product.category),
      product.name,
    ],
    openGraph: {
      type: 'article',
      title: product.name,
      description: product.description,
      authors: ['Prince Muel'],
      publishedTime: new Date(Date.now()).toISOString(),
      images: {
        url: product.categoryImage?.mobile,
        alt: product.name,
        type: 'image/jpeg',
        width: 640,
        height: 360,
      },
    },
    twitter: {
      title: product.name,
      description: product.description,
      images: {
        url: product.categoryImage?.mobile,
        width: 640,
        height: 360,
        alt: product.name,
        type: 'image/jpeg',
      },
    },
  } satisfies Metadata;
}
