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
        products.map((product, i) => (
          <ProductCard
            key={product?.id}
            product={product}
            isPriority={i === 0}
            direction={i % 2 ? 'row-reverse' : 'row'}
          />
        ))}
    </ul>
  );
};

export { ProductCards };
