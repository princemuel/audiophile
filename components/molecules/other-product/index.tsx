import { ButtonPrimary } from 'components/atoms';
import Image from 'next/future/image';
import Link from 'next/link';
import { IProduct } from 'types';
import {
  OtherProductBody,
  OtherProductImage,
  OtherProductItem,
  OtherProductName,
} from './styles';

type Props = {
  product: IProduct['others'][0];
  category: IProduct['category'];
};

const OtherProduct = ({ product, category }: Props) => {
  return (
    <OtherProductItem className='flow'>
      <OtherProductImage>
        <picture>
          <source media='(min-width: 65em)' srcSet={product?.image?.desktop} />
          <source media='(min-width: 40em)' srcSet={product?.image?.tablet} />
          <source srcSet={product?.image?.mobile} />
          <Image
            src={product?.image?.mobile}
            width='1080'
            height='1120'
            alt={product?.name}
          />
        </picture>
      </OtherProductImage>

      <OtherProductBody as='div' spacer='3rem'>
        <OtherProductName
          as='h3'
          className='fs-600 leading-400 tracking-500 uppercase'
        >
          {product?.name}
        </OtherProductName>

        <Link
          href={'/[category]/[slug]'}
          as={`/${category}/${encodeURIComponent(product?.slug)}`}
          passHref
        >
          <ButtonPrimary as='a' className='uppercase'>
            See Product
          </ButtonPrimary>
        </Link>
      </OtherProductBody>
      {/* {p} */}
    </OtherProductItem>
  );
};

export { OtherProduct };
