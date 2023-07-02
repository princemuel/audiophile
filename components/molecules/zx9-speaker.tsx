import { shimmer, toBase64 } from '@/lib';
import Image from 'next/image';
import { Button, ResponsiveImage, Text } from '../atoms';

type Props = {};

const ZX9Speaker = (props: Props) => {
  return (
    <div>
      <ResponsiveImage src={''} alt={''}>
        <picture>
          <source
            media='(min-width: 65em)'
            srcSet={'/assets/home/desktop/image-speaker-zx9.png'}
          />
          <source
            media='(min-width: 40em)'
            srcSet={'/assets/home/tablet/image-speaker-zx9.png'}
          />
          <source srcSet={'/assets/home/mobile/image-speaker-zx9.png'} />
          <Image
            src={'/assets/home/mobile/image-speaker-zx9.png'}
            width={700}
            height={475}
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
            sizes='100vw'
            alt={' zx9 speaker'}
          />
        </picture>
      </ResponsiveImage>

      <div>
        {/* variant={'inverted'} */}
        <Text as='h3' size={'3xl'} weight={'bold'}>
          ZX9 Speaker
        </Text>

        <Text>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Text>

        <Button href={`/speakers/zx9-speaker`} uppercase={true}>
          See Product
        </Button>
      </div>
    </div>
  );
};

export { ZX9Speaker };
