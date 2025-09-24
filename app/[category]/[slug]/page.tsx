import { fetchAllProducts, getProductByParams, preloadProductByParams } from '@/app/database';
import {
  BestAudioGear,
  Button,
  Container,
  NextImage,
  PageLinks,
  ProductDetailCard,
  Text,
} from '@/components';
import { defineMeta, getBaseUrl } from '@/config';
import {
  capitalize,
  getProductCategoryName,
  hasValues,
  shimmer,
  toBase64,
  tw,
} from '@/helpers';
import NextLink from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import styles from '@/assets/styles/gallery.module.scss';
import { Metadata } from 'next';

export default async function Page(props: PageProps<'/[category]/[slug]'>) {
  const params = await props.params;
  preloadProductByParams(params);

  const product = await getProductByParams(params);
  if (!product) notFound();

  return (
    <main
      aria-label={`Details about the ${product?.name}`}
      className='my-28 flex flex-col gap-28'
    >
      <section>
        <Container className=''>
          <Button type='button' variant='accent' weight='medium' uppercase={false} asChild>
            <NextLink href={`/${product?.category}`}>Go Back</NextLink>
          </Button>
        </Container>
      </section>

      <section>
        <Container className=''>
          <ProductDetailCard product={product} />
        </Container>
      </section>

      <section aria-labelledby='features-section'>
        <Container>
          <article className='flex flex-col items-start justify-between gap-32 lg:flex-row lg:gap-14'>
            <header className='flex flex-col items-start gap-6'>
              <Text as='h2' id='features-section' variant='monochrome' size='xl' weight='bold'>
                Features
              </Text>

              {product?.features.split('\n\n').map((paragraph) => (
                <Text key={paragraph.charAt(1)} as='p'>
                  {paragraph}
                </Text>
              ))}
            </header>

            <div className='flex w-full basis-full flex-col gap-8 sm:flex-row lg:flex-col'>
              <Text as='h3' variant='monochrome' size='xl' weight='bold'>
                In the box
              </Text>

              <ul className='m-0 flex flex-col gap-2 sm:mx-auto lg:m-0 lg:flex-col'>
                {hasValues(product?.includes) &&
                  product?.includes.map((included) => (
                    <li key={included.item} className='flex items-center gap-4'>
                      <Text as='strong' variant='brand' weight='bold'>
                        {included.quantity}x
                      </Text>
                      <Text as='span'>{included.item}</Text>
                    </li>
                  ))}
              </ul>
            </div>
          </article>
        </Container>
      </section>

      <section>
        <Container className=''>
          <Suspense
            fallback={
              <Text as='h3' size='xl' weight='bold'>
                Loading Featured Images of the Product
              </Text>
            }
          >
            <div className={tw('overflow-hidden rounded-lg', styles.gallery)}>
              {Object.entries(product?.gallery ?? {}).map(([key, value]) => (
                <figure key={key} className='overflow-hidden rounded-lg'>
                  <NextImage
                    src={value?.desktop}
                    alt={`A snapshot of ${product?.name}`}
                    className='w-full object-cover'
                    width={400}
                    height={225}
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(Number(700), Number(475))
                    )}`}
                  />
                </figure>
              ))}
            </div>
          </Suspense>
        </Container>
      </section>

      <section>
        <Container className=''>
          <div className='flex flex-col gap-12'>
            <header className='flex items-center justify-center'>
              <Text as='h2' variant='monochrome' size='xl' weight='bold'>
                You may also like
              </Text>
            </header>

            <ul className='flex flex-col items-center gap-16 sm:flex-row sm:gap-4 lg:gap-8'>
              {(product?.others ?? []).map((other) => {
                const category = getProductCategoryName(other);

                return (
                  <li key={other.name} className='flex flex-1 flex-col gap-8'>
                    <figure className='overflow-hidden rounded-lg'>
                      <picture>
                        <source media='(min-width: 65em)' srcSet={other.image.desktop} />
                        <source media='(min-width: 40em)' srcSet={other.image.tablet} />
                        <source srcSet={other.image.mobile} />
                        <img
                          src={other.image.mobile}
                          width='1080'
                          height='1120'
                          alt={`A preview pic of ${other.name}`}
                          loading='lazy'
                        />
                      </picture>
                    </figure>

                    <div className='flex flex-col items-center gap-8'>
                      <Text as='h4' variant='monochrome' size='medium' weight='bold'>
                        {other.name}
                      </Text>

                      <Button variant='primary' size='medium' asChild>
                        <NextLink href={`/${category}/${other.slug}`}>See Product</NextLink>
                      </Button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <PageLinks />
        </Container>
      </section>

      <section>
        <Container className=''>
          <BestAudioGear />
        </Container>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  const entries = await fetchAllProducts();
  return (entries ?? []).map((entry) => ({
    slug: entry.slug,
    category: entry.category,
  }));
}

export async function generateMetadata(
  props: PageProps<'/[category]/[slug]'>
): Promise<Metadata> {
  const params = await props.params;
  const product = await getProductByParams(params);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested resource does not exist',
    };
  }

  return defineMeta({
    title: `${product.name} • ${capitalize(product.category)}`,
    description: product.description,
    keywords: ['E-Commerce', 'Audio Devices', capitalize(product.category), product.name],
    openGraph: {
      type: 'article',
      title: `${product.name} • ${capitalize(product.category)}`,
      description: product.description,
      authors: ['Prince Muel'],
      publishedTime: new Date().toISOString(),
      url: new URL(`${params.category}/${params.slug}`, getBaseUrl()),
      images: {
        url: product.categoryImage?.mobile,
        alt: product.name,
        type: 'image/jpeg',
        width: 640,
        height: 360,
      },
    },
    twitter: {
      title: `${product.name} • ${capitalize(product.category)}`,
      description: product.description,
      card: 'summary_large_image',
      site: '@iamprincemuel',
      creator: '@iamprincemuel',
      images: {
        url: product.categoryImage?.mobile,
        width: 640,
        height: 360,
        alt: product.name,
        type: 'image/jpeg',
      },
    },
  });
}
