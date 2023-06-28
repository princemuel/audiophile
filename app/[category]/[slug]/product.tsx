import featuresStyles from '@/assets/styles/features.module.scss';
import galleryStyles from '@/assets/styles/gallery.module.scss';
import { ImageBestGearJPG, icons, links } from '@/common';
import { Button, ProductCard, ResponsiveImage, Text } from '@/components';
import { capitalize, cn } from '@/lib';
import Link from 'next/link';
interface Props {
  product: IProduct;
}

const ProductDetailsTemplate = ({ product }: Props) => {
  return (
    <>
      <section className={cn('h-container')}>
        <Button>Go back</Button>
      </section>

      <section className={cn('h-container')}>
        <ProductCard product={product} priority={true} cart={true} />
      </section>

      <section className={cn('h-container')}>
        <article
          className={cn(
            'flex items-start justify-between gap-20',
            featuresStyles.features
          )}
        >
          <header className='flex flex-col items-start gap-12'>
            <Text as='h2' variant={'primary'} size={'xl'} weight={'bold'}>
              Features
            </Text>

            {product?.features?.split('\n\n')?.map((paragraph) => (
              <Text as='p' key={paragraph?.charAt(1)}>
                {paragraph}
              </Text>
            ))}
          </header>

          <div className='flex basis-full flex-col gap-12'>
            <Text as='h3' variant={'primary'} size={'xl'} weight={'bold'}>
              In the box
            </Text>

            <ul className='flex flex-col gap-4'>
              {product?.includes?.map((included) => (
                <li key={included?.item} className='flex items-center gap-6'>
                  <Text as='strong' variant={'secondary'} weight={'bold'}>
                    {included?.quantity}x
                  </Text>
                  <Text as='span' variant={'primary/50'}>
                    {included?.item}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section className={cn('h-container')}>
        <div className={cn('', galleryStyles.gallery)}>
          {Object.entries(product?.gallery).map(([key, value]) => (
            <ResponsiveImage
              key={key}
              src={value?.desktop}
              alt={`A picture of ${product?.name}`}
              className=''
              container='rounded-brand overflow-clip'
            />
          ))}
        </div>
      </section>

      <section className={cn('flex flex-col gap-24 h-container')}>
        <header className='flex items-center justify-center'>
          <Text as='h2' variant={'primary'} size={'xl'} weight={'bold'}>
            You may also like
          </Text>
        </header>
        <ul className='flex flex-col items-center gap-12 md:flex-row'>
          {product?.others?.map((other) => {
            // SHAME FUNCTION: CHEATED 😂
            let category = other?.slug.split('-').at(-1);
            category =
              category?.charAt(category?.length - 1) === 's'
                ? category
                : category + 's';
            return (
              <li key={other?.name} className='flex flex-1 flex-col gap-12'>
                <ResponsiveImage
                  src={other?.image?.desktop}
                  alt={`A picture of ${other?.name}`}
                  container='rounded-brand overflow-clip'
                />
                <div className='flex flex-col items-center gap-12'>
                  <Text as='h4' variant={'primary'} size={'md'} weight={'bold'}>
                    {other?.name}
                  </Text>
                  <Button href={`/${category}/${other?.slug}`}>
                    See Product
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className={cn('h-container')}>
        <ul>
          {links.routes.slice(1).map((route) => (
            <li key={route.id}>
              <Link href={route.url}>
                <ResponsiveImage
                  src={route.image}
                  width={'438'}
                  height={'380'}
                  alt={capitalize(route.text)}
                />

                <div className='flex flex-col gap-6'>
                  <Text uppercase>{route.text}</Text>

                  <div className='flex items-center gap-6'>
                    <Text uppercase>Shop</Text>
                    <icons.chevron.right />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={cn('h-container')}>
        <article>
          <ResponsiveImage
            src={ImageBestGearJPG}
            alt={'A man listening to music with a headphone'}
            sizes='100vw'
            style={{ width: 'auto' }}
          />

          <div>
            <Text as='h2'>
              Bringing you the <span>best</span> audio gear
            </Text>

            <Text>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </Text>
          </div>
        </article>
      </section>
    </>
  );
};

export { ProductDetailsTemplate };
