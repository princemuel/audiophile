import { OtherProduct } from 'components/molecules';
import { Other } from 'types';
import { OtherProductsList } from './styles';

type Props = {
  products: Other[];
};

const OtherProducts = ({ products }: Props) => {
  return (
    <OtherProductsList>
      {products &&
        products?.length > 0 &&
        products.map((product) => (
          <OtherProduct key={product?.slug} product={product} />
        ))}
    </OtherProductsList>
  );
};

export { OtherProducts };
