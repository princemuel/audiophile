import { ButtonPrimary } from 'components/atoms';
import Image from 'next/future/image';
import { IProduct } from 'types';
import {
  ProductBody,
  ProductDescription,
  ProductImage,
  ProductListItem,
  ProductName,
  ProductNew,
} from './styles';

type Props = {
  product: IProduct;
  isPriority: boolean;
  direction: string;
};

const ProductCard = ({ product, isPriority, direction }: Props) => {
  return (
    <ProductListItem data-direction={direction}>
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
            src={product?.categoryImage?.desktop}
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

        <ProductName as='h2' className='fs-900 uppercase'>
          {product?.name}
        </ProductName>

        <ProductDescription>{product?.description}</ProductDescription>

        <ButtonPrimary type='button' className='uppercase'>
          See Product
        </ButtonPrimary>
      </ProductBody>
    </ProductListItem>
  );
};

export { ProductCard };
