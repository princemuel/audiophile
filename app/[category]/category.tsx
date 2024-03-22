import {
  BestAudioGear,
  Container,
  PageLinks,
  ProductCategoryCard,
} from '@/components';

interface Props {
  products: IProduct[];
}

const CategoryTemplate = ({ products }: Props) => {
  return (
    <>
      <section>
        <Container.Outer>
          <Container.Inner className='flex flex-col gap-40'>
            {products.map((product) => (
              <ProductCategoryCard key={product.id} product={product} />
            ))}
          </Container.Inner>
        </Container.Outer>
      </section>

      <section>
        <Container>
          <PageLinks />
        </Container>
      </section>

      <section>
        <Container>
          <BestAudioGear />
        </Container>
      </section>
    </>
  );
};

export { CategoryTemplate };
