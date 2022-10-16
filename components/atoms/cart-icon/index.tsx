import { CartSVG } from 'common';
import { Button } from 'components/atoms';
import Image from 'next/future/image';

const CartIcon = () => {
  return (
    <Button type='button'>
      <Image src={CartSVG} alt='cart' />
      <span></span>
    </Button>
  );
};

export { CartIcon };
