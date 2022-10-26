import { BtnControl, Text } from 'components/atoms';
import { IProduct } from 'types';
import { Container } from './styles';

type Props = {
  product: IProduct;
  size?: string;
};

const ProductCounter = ({ product, size }: Props) => {
  return (
    <Container
      data-size={size && size}
      className='text-neutral-900 bg-neutral-300 fs-200 fw-700'
    >
      <BtnControl type='button' className=''>
        &#x2212;
      </BtnControl>

      <Text>1</Text>

      <BtnControl type='button' className=''>
        &#43;
      </BtnControl>
    </Container>
  );
};

export { ProductCounter };
