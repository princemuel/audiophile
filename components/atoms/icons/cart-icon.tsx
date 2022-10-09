import { links } from 'common';
import { Avatar } from './avatar';

const CartIcon = () => {
  return <Avatar url={links?.cart} text={'Cart Icon'} />;
};

export { CartIcon };
