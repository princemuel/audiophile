import { links } from '@src/common';
import { Link } from 'react-router-dom';
import { Avatar } from './avatar/avatar';

const Logo = () => {
  return (
    <Link to={'/'}>
      <Avatar url={links?.logo} text={'Audiophile Logo'} />
    </Link>
  );
};

export { Logo };
