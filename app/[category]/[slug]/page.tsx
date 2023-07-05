import { getAllProductPaths, getProductByParams } from '@/app/database';
import { capitalize } from '@/lib';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductDetailsTemplate } from './product';

interface Props {
  params: IParams;
}

const PageRoute = async ({ params: { slug, category } }: Props) => {
  const product = await getProductByParams({ slug, category });
  if (!product) notFound();

  return (
    <main className='my-28 flex flex-col gap-40'>
      <ProductDetailsTemplate product={product} />
    </main>
  );
};

export default PageRoute;

export async function generateStaticParams() {
  const productPaths = await getAllProductPaths();
  return (productPaths || []).map(({ slug, category }) => {
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
      capitalize(category),
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
        width: 400,
        height: 400,
      },
    },
    twitter: {
      title: product.name,
      description: product.description,
      images: {
        url: product.categoryImage?.mobile,
        width: 400,
        height: 400,
        alt: product.name,
        type: 'image/jpeg',
      },
    },
  } satisfies Metadata;
}
