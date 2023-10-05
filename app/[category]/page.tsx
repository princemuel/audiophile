import { Container, Text } from '@/components';
import { defineMeta } from '@/config';
import { capitalize } from '@/helpers';
import { notFound } from 'next/navigation';
import {
  getAllProductCategories,
  getProductsByParams,
  preloadProductsByParams,
} from '../database';
import { CategoryTemplate } from './category';

interface Props {
  params: IParams;
}

const PageRoute = async ({ params: { category } }: Props) => {
  preloadProductsByParams(category);

  const products = await getProductsByParams(category);
  if (!products) notFound();

  return (
    <main aria-labelledby='heading' className='flex flex-col gap-48'>
      <header className='bg-black'>
        <Container.Outer>
          {/* NOTE!: fix heading padding */}
          <Container.Inner className='flex items-center justify-center py-8 max-lg:!pt-64'>
            <Text
              as='h1'
              id='heading'
              modifier='inverted'
              size='2xl'
              weight='bold'
            >
              {category}
            </Text>{' '}
          </Container.Inner>
        </Container.Outer>
      </header>

      <CategoryTemplate products={products} />
    </main>
  );
};

export default PageRoute;

export async function generateStaticParams() {
  const categories = await getAllProductCategories();
  return (categories || []).map((category) => {
    return { category };
  });
}

export async function generateMetadata({ params: { category } }: Props) {
  const products = await getProductsByParams(category);

  if (!products) {
    return {
      title: 'Category Not Found',
      description: 'The requested resource does not exist',
    };
  }

  const title = capitalize(category);
  const description = `${capitalize(category)} Page`;

  return defineMeta({
    title: title,
    description: description,
    keywords: [
      category || '',
      'audio devices',
      'ecommerce',
      'audio device',
      'audio',
    ],
    openGraph: {
      type: 'article',
      title: title,
      description: description,
      authors: ['Prince Muel'],
      publishedTime: new Date('2023-08-16').toISOString(),
      images: products.map((product) => ({
        url: product.categoryImage.tablet,
        alt: product.description,
        type: 'image/jpeg',
        width: 1200,
        height: 630,
      })),
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      site: '@iamprincemuel',
      creator: '@iamprincemuel',
      images: products.map((product) => ({
        url: product.categoryImage.tablet,
        alt: product.description,
        type: 'image/jpeg',
        width: 1200,
        height: 630,
      })),
    },
  });
}
