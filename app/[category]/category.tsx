import {
  BestAudioGear,
  CategoryLinks,
  Container,
  ProductCategoryCard,
} from '@/components';

interface Props {
  products: IProduct[];
}

const CategoryTemplate = ({ products }: Props) => {
  return (
    <>
      <section>
        <Container.Outer className=''>
          <Container.Inner className='flex flex-col gap-40'>
            {products.map((product) => (
              <ProductCategoryCard key={product.id} product={product} />
            ))}
          </Container.Inner>
        </Container.Outer>
      </section>

      <section>
        <Container className=''>
          <CategoryLinks />
        </Container>
      </section>

      <section>
        <Container className=''>
          <BestAudioGear />
        </Container>
      </section>
    </>
  );
};

export { CategoryTemplate };
