import NextLink from 'next/link';
import { Button, Text } from '../atoms';

const ThirdFeaturedProduct = () => {
  return (
    <article className='grid gap-6 md:auto-cols-fr md:grid-flow-col md:gap-4 lg:gap-8'>
      <figure className='h-80 overflow-hidden rounded-lg'>
        <picture>
          <source
            media='(min-width: 64em)'
            srcSet='/assets/home/desktop/image-earphones-yx1.jpg'
          />
          <source
            media='(min-width: 40em)'
            srcSet='/assets/home/tablet/image-earphones-yx1.jpg'
          />
          <source srcSet='/assets/home/mobile/image-earphones-yx1.jpg' />
          <img
            src='/assets/home/mobile/image-earphones-yx1.jpg'
            alt={`Featured preview of the YX1 Earphone`}
            width={640}
            height={360}
            className='h-full w-full object-cover'
          />
        </picture>
      </figure>

      <div
        className={`my-auto flex h-80 flex-col items-start justify-center gap-8 rounded-lg bg-neutral-300 px-8 py-10`}
      >
        <Text as='h3' variant='monochrome' size='large' weight='bold'>
          YX1 Earphones
        </Text>

        <Button type='button' variant='monochrome' modifier='outline' size='medium' asChild>
          <NextLink href={`/earphones/yx1-earphones`}>See Product</NextLink>
        </Button>
      </div>
    </article>
  );
};

export { ThirdFeaturedProduct };
