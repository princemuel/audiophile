import { BackButton, FlowChild, GlobalContainer } from 'components/atoms';
import { ProductDetails } from 'components/organisms';
import { useRouter } from 'next/router';
import { IProduct } from 'types';

type Props = {
  product: IProduct;
};

const ProductTemplate = ({ product }: Props) => {
  const { back } = useRouter();

  return (
    <GlobalContainer aria-label={product?.slug} className=''>
      <BackButton
        className='text-accent-100 fs-400 fw-500 leading-300'
        onClick={back}
      >
        Go Back
      </BackButton>

      <FlowChild>
        <ProductDetails product={product} />
      </FlowChild>
    </GlobalContainer>
  );
};

export { ProductTemplate };
