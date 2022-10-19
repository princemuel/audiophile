import {
  CategoryLinks,
  FlowChild,
  GlobalContainer,
  Heading,
  ProductCards,
} from 'components';
import { useRouter } from 'next/router';
import { IProducts } from 'types';

type Props = {
  products: IProducts;
};

const CategoryTemplate = ({ products }: Props) => {
  const router = useRouter();
  const category = router?.query?.category as string;

  return (
    <>
      <GlobalContainer className='full-width'>
        <Heading id={category} as='h1' className='fs-xl ls-4 uppercase'>
          {category}
        </Heading>
      </GlobalContainer>

      <GlobalContainer
        as='main'
        id='main-content'
        aria-labelledby={category}
        className='flow'
      >
        <FlowChild aria-label='products list' spacer='10rem'>
          <ProductCards products={products} />
        </FlowChild>

        <FlowChild aria-label='Category Links' spacer='10rem'>
          <CategoryLinks />
        </FlowChild>

        {/* BEST AUDIO GEAR */}
      </GlobalContainer>
    </>
  );
};

export { CategoryTemplate };
