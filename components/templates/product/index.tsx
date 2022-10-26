import { BackButton, FlowChild, GlobalContainer } from 'components/atoms';
import { BestAudioGear } from 'components/molecules';
import { CategoryLinks, ProductDetails } from 'components/organisms';
import { useRouter } from 'next/router';
import { IProduct } from 'types';

type Props = {
  product: IProduct;
};

const ProductTemplate = ({ product }: Props) => {
  const { back } = useRouter();

  return (
    <GlobalContainer
      as='main'
      aria-label={product?.slug}
      id='main-content'
      className='flow'
    >
      <BackButton
        type='button'
        className='text-accent-100 fs-400 fw-500 leading-300'
        onClick={back}
      >
        Go Back
      </BackButton>

      <ProductDetails product={product} />

      <FlowChild aria-label='Category Links' spacer='10rem'>
        <CategoryLinks />
      </FlowChild>

      <FlowChild aria-label='Best Audio Gear' spacer='10rem'>
        <BestAudioGear />
      </FlowChild>
    </GlobalContainer>
  );
};

export { ProductTemplate };
