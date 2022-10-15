import { CartSVG } from 'common';
import Image from 'next/future/image';

const CartIcon = () => {
  return (
    <button>
      <Image src={CartSVG} alt='cart' />
      <span></span>
    </button>
  );
};

export { CartIcon };
