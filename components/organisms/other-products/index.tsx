import { OtherProduct } from 'components/molecules';
import { IProduct } from 'types';
import { returnCategory } from 'utils';
import { OtherProductsList } from './styles';

type Props = {
  products: IProduct['others'];
};

const OtherProducts = ({ products }: Props) => {
  return (
    <OtherProductsList>
      {products &&
        products?.length > 0 &&
        products.map((product) => {
          return (
            <OtherProduct
              key={product?.slug}
              product={product}
              category={returnCategory(product?.slug)}
            />
          );
        })}
    </OtherProductsList>
  );
};

export { OtherProducts };
