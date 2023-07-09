import Link from 'next/link';
import { Button, Text } from '../atoms';

const FeaturedTwo = () => {
  return (
    <article
      className={`rounded-brand bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-[center_right] bg-no-repeat px-20 py-60 sm:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] md:px-32 md:py-40 lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')]`}
    >
      <div className='flex flex-col items-start gap-12'>
        <Text as='h3' size={'lg'} weight={'bold'}>
          ZX7 Speaker
        </Text>

        <Button variant={'neutral'} asChild>
          <Link href={`/speakers/zx7-speaker`}>See Product</Link>
        </Button>
      </div>
    </article>
  );
};

export { FeaturedTwo };
