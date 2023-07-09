import Image from 'next/image';
import Link from 'next/link';
import { Button, Text } from '../atoms';

const FeaturedOne = () => {
  return (
    <article
      className={`grid grid-cols-1 gap-12 overflow-y-clip rounded-brand bg-brand-500 bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-cover bg-[center_-14rem] bg-no-repeat px-12 py-20 md:grid-cols-2 md:gap-40  md:bg-[-25rem_-5rem] md:px-40 md:pb-0 md:pt-40`}
    >
      <figure className='max-w-xs place-self-center md:max-w-none md:translate-y-6'>
        {/* <picture>
          <source
            media='(min-width: 65em)'
            srcSet={'/assets/home/desktop/image-speaker-zx9.png'}
          />
          <source
            media='(min-width: 40em)'
            srcSet={'/assets/home/tablet/image-speaker-zx9.png'}
          />
          <source srcSet={'/assets/home/mobile/image-speaker-zx9.png'} />
          <img
            src={'/assets/home/mobile/image-speaker-zx9.png'}
            width='540'
            height='680'
            alt={'zx9 speaker'}
            className='rounded-brand'
          />
        </picture> */}

        <Image
          src={'/assets/home/desktop/image-speaker-zx9.png'}
          width='540'
          height='680'
          sizes='100vw'
          alt={'zx9 speaker'}
          className='rounded-brand'
        />
      </figure>

      <div className='flex flex-col items-center gap-12 text-center md:my-auto md:items-start md:text-left'>
        <Text
          as='h3'
          variant={'inverted'}
          weight={'bold'}
          uppercase
          className='text-[clamp(4rem,5vw,5.6rem)]'
        >
          <span>ZX9</span>
          <br />
          <span>Speaker</span>
        </Text>

        <Text as='p' variant={'inverted'} className=' max-w-[35ch]'>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Text>

        <Button
          variant={'none'}
          className='bg-black text-white hover:bg-neutral-700 focus:bg-neutral-700'
          asChild
        >
          <Link href={`/speakers/zx9-speaker`}>See Product</Link>
        </Button>
      </div>
    </article>
  );
};

export { FeaturedOne };
