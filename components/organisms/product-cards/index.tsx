import { ProductCard } from 'components/molecules';
import { IProducts } from 'types';
import { ProductCardList } from './styles';

type Props = {
  products: IProducts;
};

const ProductCards = ({ products }: Props) => {
  return (
    <ProductCardList role='list'>
      {products &&
        products?.length > 0 &&
        products.map((product, idx) => (
          <ProductCard
            key={product?.id}
            product={product}
            isPriority={idx === 0}
            direction={idx % 2 ? 'row-reverse' : 'row'}
            variant='li'
          />
        ))}
    </ProductCardList>
  );
};

export { ProductCards };
