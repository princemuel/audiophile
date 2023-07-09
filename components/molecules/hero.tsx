import { cn } from '@/lib';
import Link from 'next/link';
import { Button, Text } from '../atoms';

const Hero = () => {
  return (
    <>
      <article className={cn(`py-60`)}>
        <div
          className={`flex flex-col items-center gap-12 text-center lg:items-start lg:text-left`}
        >
          <Text
            as='p'
            size={'sx'}
            uppercase
            aria-live='polite'
            className='text-white/50'
          >
            New Product
          </Text>

          <Text
            as='h1'
            variant={'inverted'}
            weight={'bold'}
            uppercase
            className='text-[clamp(4rem,5vw,5.6rem)]'
          >
            <span>XX99 Mark II</span>
            <br />
            <span>Headphones</span>
          </Text>

          <Text className='max-w-[40ch] text-white/75'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Text>

          <Button className='justify-center ' asChild>
            <Link href={`/headphones/xx99-mark-two-headphones`}>
              See Product
            </Link>
          </Button>
        </div>
      </article>
    </>
  );
};

export { Hero };
