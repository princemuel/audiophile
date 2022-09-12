import { links } from '@src/common';

const CartIcon = () => {
  return (
    <figure>
      <img src={links?.cart} alt='Cart Icon' />
      <span className='sr-only'>Cart Icon</span>
    </figure>
  );
};

export { CartIcon };
