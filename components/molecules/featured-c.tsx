import Link from 'next/link';
import { Button, Text } from '../atoms';

const FeaturedThree = () => {
  return (
    <article className='grid gap-12 sx:auto-cols-fr sx:grid-flow-col'>
      <figure
        className={`rounded-brand bg-[url('/assets/home/mobile/image-earphones-yx1.jpg')] bg-cover bg-center bg-no-repeat py-56 sm:bg-[url('/assets/home/tablet/image-earphones-yx1.jpg')] lg:bg-[url('/assets/home/desktop/image-earphones-yx1.jpg')]`}
      />
      <div
        className={`flex flex-col items-start gap-12 rounded-brand bg-neutral-300 px-20 py-40 md:px-24`}
      >
        <Text as='h3' size={'lg'} weight={'bold'}>
          YX1 Earphones
        </Text>

        <Button variant={'neutral'} asChild>
          <Link href={`/earphones/yx1-earphones`}>See Product</Link>
        </Button>
      </div>
    </article>
  );
};

export { FeaturedThree };
