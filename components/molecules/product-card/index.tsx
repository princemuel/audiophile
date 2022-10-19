import { ButtonPrimary } from 'components/atoms';
import Image from 'next/future/image';
import { IProduct } from 'types';
import { removeDot } from 'utils';
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
};

const ProductCard = ({ product }: Props) => {
  return (
    <ProductListItem>
      <ProductImage>
        <Image
          src={removeDot(product?.categoryImage?.desktop)}
          width='1080'
          height='1120'
          alt={product?.name}
        />
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
