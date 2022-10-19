import { ButtonPrimary } from 'components/atoms';
import Image from 'next/future/image';
import { IProduct } from 'types';
import { ProductImage } from './styles';

type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  return (
    <li>
      <ProductImage>
        <Image src={product.categoryImage.desktop} alt={product?.name} />
      </ProductImage>
      {/* PRODUCT IS NEW? */}
      {/* PRODUCT NAME */}
      {/* PRODUCT DESCRIPTION */}
      <ButtonPrimary type='button' />
    </li>
  );
};

export { ProductCard };
