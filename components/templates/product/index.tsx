import { BackButton, FlowChild, GlobalContainer } from 'components/atoms';
import { BestAudioGear } from 'components/molecules';
import {
  CategoryLinks,
  OtherProducts,
  ProductDetails,
} from 'components/organisms';
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
        className='text-accent-100 fs-400 fw-500 leading-300'
        onClick={back}
      >
        Go Back
      </BackButton>

      <FlowChild>
        <ProductDetails product={product} />
      </FlowChild>

      <FlowChild aria-label="This Product's Features" spacer='10rem'>
        {/* FEATURES */}
      </FlowChild>

      <FlowChild aria-label='Items Included' spacer='10rem'>
        {/* IN THE BOX */}
      </FlowChild>

      <FlowChild aria-label='Different pictures of the Product' spacer='10rem'>
        {/* PRODUCT GALLERY */}
      </FlowChild>

      <FlowChild aria-label='Other Similar Products' spacer='10rem'>
        <OtherProducts products={product?.others} />
      </FlowChild>

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
