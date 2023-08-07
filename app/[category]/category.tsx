'use client';

import { BestAudioGear, CategoryLinks, ProductCard } from '@/components';
import { cn } from '@/lib';
import { useProducts } from '@/providers';
import { use } from 'react';

interface Props {}

const CategoryTemplate = (props: Props) => {
  const data = use(useProducts());

  const slugs = data.map((product) => product.slug);

  console.log(slugs);

  return (
    <>
      <section>
        <div className={cn('flex flex-col gap-40 h-container')}>
          {data.map((product, idx) => (
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
