import { Container, Text } from '@/components';
import { defineMeta } from '@/config';
import { capitalize } from '@/helpers';
import { notFound } from 'next/navigation';
import {
  getAllProductCategories,
  getProductsByParams,
  preloadProductsByParams,
} from '../database';

import { BestAudioGear, PageLinks, ProductCategoryCard } from '@/components';
import { Metadata } from 'next';

export default async function Page(props: PageProps<'/[category]'>) {
  const params = await props.params;
  preloadProductsByParams(params);

  const products = await getProductsByParams(params);
  if (!products) notFound();

  return (
    <main aria-labelledby='heading' className='flex flex-col gap-48'>
      <header className='bg-black'>
        <Container.Outer>
          {/* NOTE!: fix heading padding */}
          <Container.Inner className='flex items-center justify-center py-8 max-lg:!pt-64'>
            <Text as='h1' id='heading' modifier='inverted' size='2xl' weight='bold'>
              {params.category}
            </Text>
          </Container.Inner>
        </Container.Outer>
      </header>

      <section>
        <Container.Outer>
          <Container.Inner className='flex flex-col gap-40'>
            {products.map((product) => (
              <ProductCategoryCard key={product.id} product={product} />
            ))}
          </Container.Inner>
        </Container.Outer>
      </section>

      <section>
        <Container>
          <PageLinks />
        </Container>
      </section>

      <section>
        <Container>
          <BestAudioGear />
        </Container>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  const entries = await getAllProductCategories();
  return (entries ?? []).map((entry) => ({ category: entry }));
}

export async function generateMetadata(props: PageProps<'/[category]'>): Promise<Metadata> {
  const params = await props.params;
  const products = await getProductsByParams(params);

  if (!products) {
    return {
      title: 'Category Not Found',
      description: 'The requested resource does not exist',
    };
  }

  const category = params.category;

  const title = capitalize(category);
  const description = `${capitalize(category)} Page`;

  return defineMeta({
    title: title,
    description: description,
    keywords: [category || '', 'audio devices', 'ecommerce', 'audio device', 'audio'],
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
