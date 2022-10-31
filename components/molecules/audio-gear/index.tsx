import {
  BestGearDesktopJPG,
  BestGearMobileJPG,
  BestGearTabletJPG,
} from 'common';
import { HighlightedText } from 'components/atoms';
import Image from 'next/future/image';
import {
  AGArticle,
  AGAvatar,
  AGBody,
  AGDescription,
  AGHeadline,
} from './styles';

const BestAudioGear = () => {
  return (
    <AGArticle>
      <AGAvatar>
        <picture>
          <source media='(min-width: 65em)' srcSet={BestGearDesktopJPG.src} />
          <source media='(min-width: 40em)' srcSet={BestGearTabletJPG.src} />
          <source srcSet={BestGearMobileJPG.src} />
          <Image
            src={BestGearMobileJPG.src}
            width='1080'
            height='1120'
            alt={'A man listening to music with a headphone'}
          />
        </picture>
      </AGAvatar>

      <AGBody>
        <AGHeadline
          as='h2'
          className='fs-900 leading-700 tracking-300 uppercase'
        >
          Bringing you the <HighlightedText as='span'>best</HighlightedText>
          audio gear
        </AGHeadline>

        <AGDescription>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </AGDescription>
      </AGBody>
    </AGArticle>
  );
};

export { BestAudioGear };
