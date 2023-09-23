import NextLink from 'next/link';
import { Button, NextImage, Text } from '../atoms';

const FeaturedOne = () => {
  return (
    <article
      className={`grid grid-cols-1 gap-7 overflow-y-hidden rounded-lg bg-brand-500 bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-cover bg-[center_-9rem] bg-no-repeat px-7 py-12 md:grid-cols-2 md:gap-24 md:bg-[-16rem_-3rem] md:px-24 md:pb-0 md:pt-24 lg:gap-16 lg:pl-12`}
    >
      <figure className='h-48 max-w-xs place-self-center md:h-60 lg:h-[24rem] lg:max-w-none lg:translate-y-9'>
        <NextImage
          src={'/assets/home/desktop/image-speaker-zx9.png'}
          width='540'
          height='680'
          sizes='100vw'
          alt={'zx9 speaker'}
          className='h-full w-full rounded-lg object-cover'
        />
      </figure>

      <div className='flex flex-col items-center gap-12 text-center md:my-auto md:items-start md:text-left lg:pb-24'>
        <Text
          as='h3'
          modifier='inverted'
          size={'3xl'}
          weight='bold'
          className='w-[min-content] whitespace-break-spaces text-[clamp(2.5rem,5vw,3.5rem)]'
        >
          ZX9 Speaker
        </Text>

        <Text as='p' modifier='inverted' className='max-w-[35ch]'>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Text>

        <Button type='button' variant={'monochrome'} size={'medium'} asChild>
          <NextLink href={`/speakers/zx9-speaker`}>See Product</NextLink>
        </Button>
      </div>
    </article>
  );
};

export { FeaturedOne };
