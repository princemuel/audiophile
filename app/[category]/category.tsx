import { ImageBestGearJPG, icons, links } from '@/common';
import { ProductCard, ResponsiveImage, Text } from '@/components';
import { capitalize, cn } from '@/lib';
import Link from 'next/link';

interface Props {
  products: IProduct[];
}

const CategoryTemplate = ({ products }: Props) => {
  return (
    <>
      <section className={cn('h-container')}>
        {products.map((product, idx) => (
          <ProductCard
            key={product.id}
            product={product}
            priority={idx === 0}
          />
        ))}
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

export { CategoryTemplate };
