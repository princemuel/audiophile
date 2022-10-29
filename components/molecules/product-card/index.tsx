import { ButtonPrimary } from 'components/atoms';
import Image from 'next/future/image';
import Link from 'next/link';
import { IProduct } from 'types';
import {
  ProductBody,
  ProductDescription,
  ProductImage,
  ProductListItem,
  ProductName,
  ProductNew,
  StyledVariantMap,
} from './styles';

type Props = {
  variant: keyof typeof StyledVariantMap;
  product: IProduct;
  isPriority: boolean;
  direction: 'row' | 'row-reverse';
};

const ProductCard = ({ variant, product, isPriority, direction }: Props) => {
  const selected = StyledVariantMap[variant];

  return (
    <ProductListItem as={selected} data-direction={direction}>
      <ProductImage>
        <picture>
          <source
            media='(min-width: 65em)'
            srcSet={product?.categoryImage?.desktop}
          />
          <source
            media='(min-width: 40em)'
            srcSet={product?.categoryImage?.tablet}
          />
          <source srcSet={product?.categoryImage?.mobile} />
          <Image
            src={product?.categoryImage?.mobile}
            width='1080'
            height='1120'
            alt={product?.name}
            priority={isPriority}
          />
        </picture>
      </ProductImage>

      <ProductBody>
        {product?.new && (
          <ProductNew className='text-primary-100 fs-400 leading-300 uppercase'>
            New Product
          </ProductNew>
        )}

        <ProductName
          as='h2'
          className='fs-900 leading-700 tracking-300 uppercase'
        >
          {product?.name}
        </ProductName>

        <ProductDescription>{product?.description}</ProductDescription>

        <Link
          href={`/[category]/[slug]`}
          as={`/${product?.category}/${encodeURIComponent(product?.slug)}`}
          passHref
        >
          <ButtonPrimary as='a' className='uppercase'>
            See Product
          </ButtonPrimary>
        </Link>
      </ProductBody>
    </ProductListItem>
  );
};

export { ProductCard };
