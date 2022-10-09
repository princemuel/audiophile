import { BackButton, ProductDetails } from 'components';
import { useRouter } from 'next/router';
import { IProduct } from 'types';

type Props = {
  product: IProduct;
};

const ProductTemplate = ({ product }: Props) => {
  const { back } = useRouter();
  return (
    <>
      <BackButton onClick={back}>Go Back</BackButton>
      <ProductDetails product={product} />
    </>
  );
};

export { ProductTemplate };
