import { Text } from '../atoms';

const BestAudioGear = () => {
  return (
    <article className='mb-20 flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-20'>
      <figure className='flex-1 overflow-hidden rounded-lg'>
        <picture>
          <source
            media='(min-width: 64em)'
            srcSet='/assets/shared/desktop/image-best-gear.jpg'
          />
          <source
            media='(min-width: 40em)'
            srcSet='/assets/shared/tablet/image-best-gear.jpg'
          />
          <source srcSet='/assets/shared/mobile/image-best-gear.jpg' />
          <img
            src='/assets/shared/mobile/image-best-gear.jpg'
            width={700}
            height={475}
            className='h-full w-full object-cover'
            alt='A man listening to music with a headphone'
          />
        </picture>
      </figure>

      <div className='flex flex-1 flex-col items-center gap-10 text-center lg:items-start lg:text-left'>
        <Text
          as='h3'
          variant='monochrome'
          size='xl'
          weight='bold'
          className='max-w-[20ch] lg:max-w-[15ch]'
        >
          Bringing you the <em className='text-brand-500'> best </em>
          audio gear
        </Text>

        <Text as='p' variant='monochrome' className='max-w-[min(70ch,100%)]'>
          Located at the heart of New York City, Audiophile is the premier store for high end
          headphones, earphones, speakers, and audio accessories. We have a large showroom and
          luxury demonstration rooms available for you to browse and experience a wide range of
          our products. Stop by our store to meet some of the fantastic people who make
          Audiophile the best place to buy your portable audio equipment.
        </Text>
      </div>
    </article>
  );
};

export { BestAudioGear };
