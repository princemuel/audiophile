import { BestAudioGear, CategoryLinks, ProductCard } from '@/components';
import { cn } from '@/lib';

interface Props {
  products: IProduct[];
}

const CategoryTemplate = ({ products }: Props) => {
  return (
    <>
      <section>
        <div className={cn('flex flex-col gap-40 h-container')}>
          {products.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={idx === 0}
            />
          ))}
        </div>
      </section>

      <section>
        <div className={cn('h-container')}>
          <CategoryLinks />
        </div>
      </section>

      <section>
        <div className={cn('h-container')}>
          <BestAudioGear />
        </div>
      </section>
    </>
  );
};

export { CategoryTemplate };
