import { cn } from '@/lib';
import { ProductCard } from '../molecules';

interface Props {
  products: IProduct[];
}

const CategoryTemplate = ({ products }: Props) => {
  return (
    <>
      <section className={cn('h-container')}>
        {products.map((product, idx) => (
          <ProductCard
            key={product.id}
            product={product}
            priority={idx === 0}
          />
        ))}
      </section>
    </>
  );
};

export { CategoryTemplate };
