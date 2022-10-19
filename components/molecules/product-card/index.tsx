import { ButtonPrimary, Heading, Text } from 'components/atoms';
import Image from 'next/future/image';
import { IProduct } from 'types';
import { removeDot } from 'utils';
import { ProductBody, ProductImage } from './styles';

type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  return (
    <li>
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
          <Text className='text-primary-100 fs-500 uppercase'>New Product</Text>
        )}
        <Heading className='fs-900 uppercase'>{product?.name}</Heading>

        <Text>{product?.description}</Text>

        <ButtonPrimary type='button' className='uppercase'>
          See Product
        </ButtonPrimary>
      </ProductBody>
    </li>
  );
};

export { ProductCard };
