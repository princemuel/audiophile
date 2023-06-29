import { shimmer, toBase64 } from '@/lib';
import Image from 'next/image';
import { ResponsiveImage, Text } from '../atoms';

interface Props {}

const BestAudioGear = () => {
  return (
    <article className='flex flex-col gap-24 md:flex-row-reverse md:items-center md:gap-40'>
      <ResponsiveImage
        src={''}
        alt={''}
        container='rounded-brand flex-1 overflow-clip'
      >
        <picture>
          <source
            media='(min-width: 48em)'
            srcSet={'/assets/shared/desktop/image-best-gear.jpg'}
          />
          <source
            media='(min-width: 40em)'
            srcSet={'/assets/shared/tablet/image-best-gear.jpg'}
          />
          <source srcSet={'/assets/shared/mobile/image-best-gear.jpg'} />
          <Image
            src={'/assets/shared/mobile/image-best-gear.jpg'}
            width={700}
            height={475}
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
            style={{ width: 'auto' }}
            sizes='100vw'
            alt={'A man listening to music with a headphone'}
          />
        </picture>
      </ResponsiveImage>

      <div className='flex flex-1 flex-col items-center gap-16 text-center md:items-start md:text-left'>
        <Text as='h3' variant={'primary'} size={'2xl'} weight={'bold'}>
          Bringing you the <strong className='text-brand-500'> best </strong>
          audio gear
        </Text>

        <Text as='p' variant={'primary/50'}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Text>
      </div>
    </article>
  );
};

export { BestAudioGear };
