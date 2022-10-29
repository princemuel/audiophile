import Image from 'next/future/image';
import { IProduct } from 'types';
import { GalleryContainer } from './styles';

type Props = {
  gallery: IProduct['gallery'];
  alt: string;
};

const ProductGallery = ({ gallery, alt }: Props) => {
  return (
    <GalleryContainer>
      <picture>
        <source media='(min-width: 65em)' srcSet={gallery?.first?.desktop} />
        <source media='(min-width: 40em)' srcSet={gallery?.first?.tablet} />
        <source srcSet={gallery?.first?.mobile} />
        <Image
          src={gallery?.first?.mobile}
          width='654'
          height='736'
          alt={`First picture of the ${alt}`}
        />
      </picture>

      <picture>
        <source media='(min-width: 65em)' srcSet={gallery?.second?.desktop} />
        <source media='(min-width: 40em)' srcSet={gallery?.second?.tablet} />
        <source srcSet={gallery?.second?.mobile} />
        <Image
          src={gallery?.second?.mobile}
          width='654'
          height='736'
          alt={`Second picture of the ${alt}`}
        />
      </picture>

      <picture>
        <source media='(min-width: 65em)' srcSet={gallery?.third?.desktop} />
        <source media='(min-width: 40em)' srcSet={gallery?.third?.tablet} />
        <source srcSet={gallery?.third?.mobile} />
        <Image
          src={gallery?.third?.mobile}
          width='1080'
          height='736'
          alt={`Third picture of the ${alt}`}
        />
      </picture>
    </GalleryContainer>
  );
};

export { ProductGallery };
