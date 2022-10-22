import { FlowChild, GlobalContainer, Heading } from 'components/atoms';
import { BestAudioGear } from 'components/molecules';
import { CategoryLinks, ProductCards } from 'components/organisms';
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
        <Heading
          id={category}
          as='h1'
          className='bg-neutral-900 text-neutral-100 fs-900 ls-4 text-center uppercase'
        >
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
        <FlowChild aria-label='Best Audio Gear' spacer='10rem'>
          <BestAudioGear />
        </FlowChild>

        {/* BEST AUDIO GEAR */}
      </GlobalContainer>
    </>
  );
};

export { CategoryTemplate };
