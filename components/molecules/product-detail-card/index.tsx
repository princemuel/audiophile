import { ButtonPrimary } from 'components/atoms';
import Image from 'next/future/image';
import { IProduct } from 'types';
import { ProductCounter } from '../product-quantity';
import {
  ProductBody,
  ProductDescription,
  ProductImage,
  ProductItem,
  ProductName,
  ProductNew,
  ProductPrice,
} from './styles';

type Props = {
  product: IProduct;
  isPriority: boolean;
};

const ProductDetailCard = ({ product, isPriority }: Props) => {
  return (
    <ProductItem>
      <ProductImage>
        <picture>
          <source
            media='(min-width: 45em)'
            srcSet={product?.categoryImage?.desktop}
          />
          <source
            media='(min-width: 36em)'
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
        {Boolean(product?.new) && (
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

        <ProductPrice className='text-neutral-900 fs-500 fw-700'>
          $ {product?.price?.toLocaleString('en-US')}
        </ProductPrice>

        <div className='flex items-center'>
          <ProductCounter product={product} />
          <ButtonPrimary type='button' className='uppercase'>
            Add to cart
          </ButtonPrimary>
        </div>
      </ProductBody>
    </ProductItem>
  );
};

export { ProductDetailCard };
