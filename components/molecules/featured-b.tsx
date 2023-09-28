import NextLink from 'next/link';
import { Button, Text } from '../atoms';

const SecondFeaturedProduct = () => {
  return (
    <article
      className={`rounded-lg bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-[center_right] bg-no-repeat px-10 py-36 sm:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] md:px-20 md:py-24 lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')]`}
    >
      <div className='flex flex-col items-start gap-12'>
        <Text as='h3' variant={'monochrome'} size={'large'} weight={'bold'}>
          ZX7 Speaker
        </Text>

        <Button
          type='button'
          variant={'monochrome'}
          modifier={'outline'}
          size={'medium'}
          asChild
        >
          <NextLink href={`/speakers/zx7-speaker`}>See Product</NextLink>
        </Button>
      </div>
    </article>
  );
};

export { SecondFeaturedProduct };
