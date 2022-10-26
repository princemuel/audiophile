import { OtherProduct } from 'components/molecules';
import { IProduct } from 'types';
import { OtherProductsList } from './styles';

type Props = {
  products: IProduct['others'];
  category: IProduct['category'];
};

const OtherProducts = ({ products, category }: Props) => {
  return (
    <OtherProductsList>
      {products &&
        products?.length > 0 &&
        products.map((product) => (
          <OtherProduct
            key={product?.slug}
            product={product}
            category={category}
          />
        ))}
    </OtherProductsList>
  );
};

export { OtherProducts };
