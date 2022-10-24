import { BtnControl } from 'components/atoms';
import { IProduct } from 'types';

type Props = {
  product: IProduct;
};

const ProductCounter = ({ product }: Props) => {
  return (
    <div>
      <BtnControl type='button' className=''>
        &minus;
      </BtnControl>

      {/* <Text>{count}</Text> */}

      <BtnControl type='button' className=''>
        &plus;
      </BtnControl>
    </div>
  );
};

export { ProductCounter };
