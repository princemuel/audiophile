import { ProductCard } from 'components/molecules';
import { IProducts } from 'types';

type Props = {
  products: IProducts;
};

const ProductCards = ({ products }: Props) => {
  return (
    <ul role='list'>
      {products &&
        products?.length > 0 &&
        products.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
    </ul>
  );
};

export { ProductCards };
