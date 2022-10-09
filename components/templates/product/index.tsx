import { BackButton, GlobalContainer, ProductDetails } from 'components';
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
      <ProductDetails product={product} />
    </GlobalContainer>
  );
};

export { ProductTemplate };
